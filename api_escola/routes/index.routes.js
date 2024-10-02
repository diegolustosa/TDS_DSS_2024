const express = require("express");
const usuariosRouter = require('./usuarios.router');


const routes = express.Routers();

routes.use("/usuarios", usuariosRouter);
routes.use // colocar aqui sub rotas para ALUNOS, PROFESSORES E TURMAS

module.exports = routes;