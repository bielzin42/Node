//criando um servidor

var http = require("http"); //carregando o módulo http node

http.createServer(function(requisicao, resposta)
{
    resposta.end("<h1 style='color: blue; text-align: center;'>Bem vindo</h1>")

}).listen(3000);

//com isso eu crio um servidor

console.log("Meu servidor está funcionando")

//usando o express
// como instalar = npm install express
