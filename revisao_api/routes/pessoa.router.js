const express = require("express");
const pessoaController = require("../controller/pessoa.controller");
const routes = express.Router();

//CRUD Create Read Update Delete
routes.post("/", (pessoaController.inserir));
routes.get("/", (pessoaController.consultar));
routes.put("/", (pessoaController.atualizar));
routes.delete("/", (pessoaController.deletar));
module.exports = routes