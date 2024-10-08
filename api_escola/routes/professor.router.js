const express = require("express");
const professorController = require("../controller/professor.controller");

const routes = express.Router();

routes.post("/", professorController.cadastrar);
routes.get("/", professorController.consultar);
routes.put("/", professorController.atualizar);
routes.delete("/", professorController.deletar);
routes.get("/turma/:turma", professorController.buscarPorTurma);
routes.get("/professor/:ra", professorController.buscaPorRa);

module.exports = routes;