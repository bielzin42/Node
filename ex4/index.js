// console.log("Ola mundo")

// // criar identidade do projeto: npm init
// //criado o arquivo package.json (javascrtipt object notation) que contem informações sobre o projeto.
// // instalar express: npm install express

let express = require("express")
{
    let app = express()
    let port = 3000;
    
    app.get('/',(req, res) => 
    {
        res.send("<h1>Homer</h1>")
    })

    app.listen(port,() =>
    {
        console.log(`Servidor rodando em http://localhost:${port}`)
        console.log("para derrubar servidor: crtl + c")
    })
}