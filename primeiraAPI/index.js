const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// http://localhost:3000/ aqui captura o request e response pelo barra
app.get("/", (request, response) => {

    response.status(200).send("O seu servidor está funcionando");
})

app.get("/novaRota", (request, response) => {
    response.send("Essa é a nova rota!");
})
app.get("/clientes", (request, response) => {
    const clientes = [
        {
            nome: "John",
            idade: 15,
        },
        {
            nome: "Derek",
            idade: 15,
        }
    ]
    response.send(clientes);
})

app.post("/cliente", (request, response) => {
    const cliente = request.body;
    response.send(cliente)

});


app.listen(3000, (event) => {
    console.log("O servidor esta rodando na 3000");
});