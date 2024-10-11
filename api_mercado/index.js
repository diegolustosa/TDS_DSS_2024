const express = require("express");
const bodyParser = require("body-parser");
const indexRoutes = require("./routes/index.routes");

const conn = require("./mysql-connection");
const app = express();

app.use(bodyParser.json());
app.use(indexRoutes);
//conn.raw faz uma consulta no banco de dados da rota requerida em conn "select 1" faz com que retorne 1
//.then caso a consulta tenha sucesso irá lançar o log
conn.raw("select 1").then(() => {
    console.log("banco de dados conectado com sucesso!");
}).catch((erro) => {
    console.log(`Erro ao conectar ao banco de dados ${erro}`);
});


app.listen(8080, () => {
    console.log(`O servidor está rodando na porta 8080! 🚀`);
});