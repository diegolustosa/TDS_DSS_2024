const routes = require("express").Router();
const alunoRouter = require("./aluno.router");
const bibliotecaRouter = require("./biblioteca.router");


routes.use("/aluno", alunoRouter);
routes.use("/biblioteca", bibliotecaRouter);

module.exports = routes;