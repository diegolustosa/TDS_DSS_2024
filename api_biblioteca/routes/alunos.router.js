const routes = require("express").Router();
const alunosController = require("../controller/alunos.controller");
// CRUD

routes.post("/", alunosController.cadastro);
routes.get("/", alunosController.consultar);
routes.get("/:id([0-9]+)", alunosController.buscaPorId);
routes.put("/:id([0-9]+)", alunosController.atualizar);
routes.delete("/", alunosController.deletar);

module.exports = routes;