const routes = require("express").Router();
const alunoController = require("../controller/aluno.controller");
// CRUD

routes.post("/", alunoController.cadastro);
routes.get("/", alunoController.consultar);
routes.get("/:id([0-9]+)", alunoController.buscaPorId);
routes.put("/:id([0-9]+)", alunoController.atualizar);
routes.delete("/", alunoController.deletar);

module.exports = routes;