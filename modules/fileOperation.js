const fs = require('fs');
const fm = require('./fileManager')

module.exports = {
    async lerArquivo(){
        fs.readFile("respostaJson.json", function (error, data) {
            if (error) {
                console.log("Deu erro");
            }
            else { 
                
                var resultado = JSON.parse(data);
                //console.log(resultado); 
                var data = fm.processamento(resultado);
                return data;
                //console.log(resultado.token);
            }
        });
    },
    escreverArquivo(result) {
        fs.writeFile("respostaJson.json", JSON.stringify(result, null, 4), 'utf8', function (error) {
            if (error) {
                //console.log("Erro ao criar arquivo");
                return 0;
            }
            else {
                console.log("Arquivo criado com sucesso");
                
            }
        });
    }
    
    
}