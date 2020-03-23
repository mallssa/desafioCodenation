# desafioCodenation
Repositório feito para armazenar o projeto de seleção da codenation para o AceleraDev de React Native 


O projeto consiste em um programa de descritografacao da cifra de Cesar. Foi desenvolvido com express pra montar o servidor.
É consumida uma API dacodenation, fornecida para esse desafio e que para acesso é necessário o uso do seu próprio TOKEN. 


Para uso do TOKEN, é necessário mudar o arquivo com nome ".env.exemplo" para ".env" e colocar seu TOLKEN no lugar destinado.

Por fim, para que o projeto funcione, é necessário algum tipo de software de testes de API, como postman, ou insomnia.


Como executar:
    No terminal, no diretório do projeto, digitar npm start e assim o servidor estará ligado.
    No Postman/Insomnia mandar uma requisicao GET para a localhost:3000/cifra e o objeto de retorno deve ser um JSON semelhante
ao JSON de exemplo:


                                      {
                                        "numero_casas": 10,
                                        "token":"token_do_usuario",
                                        "cifrado": "texto criptografado",
                                        "decifrado": "aqui vai o texto decifrado",
                                        "resumo_criptografico": "aqui vai o resumo"
                                      }
                                      
                                      
    Após isso, será criado um arquivo chamado respostaJson.json que é o arquivo com a resposta do desafio.
