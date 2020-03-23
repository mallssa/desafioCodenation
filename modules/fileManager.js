module.exports = {
    processamento(dado){
        var size = dado.cifrado.length;
        var decod = '';

        for(var i = 0;i<size;i++){
            //console.log(dado.cifrado.charCodeAt(i))
            var data = dado.cifrado.charCodeAt(i);
            if(data>96 && data<123){
                var result = data-dado.numero_casas;
                if(result<97){
                    result+=26;
                }
                decod+=String.fromCharCode(result);
            }
            else{
                decod += String.fromCharCode(data);
            }
        }
        //console.log(decod);
        dado.decifrado = decod;
        return dado;
    }

}