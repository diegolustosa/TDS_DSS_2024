const routes = require("express").Router();
const alunosRouter = require("./alunos.router");
const bibliotecaRouter = require("./biblioteca.router");


routes.use("/alunos", alunosRouter);
routes.use("/biblioteca", bibliotecaRouter);
routes.use("/reservas", reservasRouter);

module.exports = routes;