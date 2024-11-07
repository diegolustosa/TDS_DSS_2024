const routes = require("express").Router();
const alunosRouter = require("./alunos.router");
const bibliotecaRouter = require("./biblioteca.router");
const reservasRouter = require("./reservas.router");

routes.use("/alunos", alunosRouter);
routes.use("/biblioteca", bibliotecaRouter);
routes.use("/reservas", reservasRouter);

module.exports = routes;