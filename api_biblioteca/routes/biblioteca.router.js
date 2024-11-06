const routes = require("express").Router();
const bibliotecaController = require("../controller/biblioteca.controller");

//CRUD
routes.post("/", bibliotecaController.cadastrar);
routes.get("/", bibliotecaController.consultar);
routes.put("/:id([0-9]+)", () => { });
routes.delete("/:id([0-9]+)", ()=>{});

module.exports = routes;