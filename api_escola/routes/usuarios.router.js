const express = require("express");
const usuariosController = require('../controller/usuarios.controller');

const routes = express.Router();

routes.post("/cadastro", usuariosController.cadastro);
routes.get("/consultar", usuariosController.consulta);
routes.get("/consultar/:id([0-9]+)", usuariosController.consultaPorId);

module.exports = routes;