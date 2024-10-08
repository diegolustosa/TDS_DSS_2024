const express = require("express");
const alunoController = require("../controller/aluno.controller");

const routes = express.Router();


routes.post("/", alunoController.cadastrar);
routes.get("/", alunoController.consultar);
routes.get("/:ra([0-9]+)", alunoController.buscaPorId);
routes.put("/", alunoController.atualizar);
routes.delete("/:ra([0-9]+)", alunoController.deletar);

module.exports = routes;