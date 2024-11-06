const routes = require("express").Router();
const reservasController = require("../controller/reservas.controller");

//CRUD
routes.post("/", reservasController.cadastrar);
routes.get("/", reservasController.consultar);
routes.put("/:id([0-9]+)", () => { });
routes.delete("/:id([0-9]+)", ()=>{});

module.exports = routes;