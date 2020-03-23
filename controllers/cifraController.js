const request = require('request');
const wF = require('../modules/fileOperation')
const fm = require('../modules/fileManager');
const sha1 = require('js-sha1');

var token = "6215ab5bb795dc441b7be494b4b90d572d7fac64"
var url = "https://api.codenation.dev/v1/challenge/dev-ps/generate-data?token="+token

module.exports = {


    index(req,res){
        
        request.get(url, (error,response,body) => {
            if(error){
                return res.json(error);
            }
            else{
                var stringDecripted,hash;
                var result = JSON.parse(body);
                wF.escreverArquivo(result);
                stringDecripted = fm.processamento(result);
                hash = sha1(stringDecripted.decifrado);
                stringDecripted.resumo_criptografico = hash;
                wF.escreverArquivo(stringDecripted);                
                return res.json(result);
            } 
            
        });

    }
}



