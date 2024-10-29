const routes = require("express").Router();
const clienteController = require("../controller/produto.controller");

//CRUD
routes.post("/", () => { });
routes.get("/", () => { });
routes.put("/:id([0-9]+)", () => { });
routes.delete("/:id([0-9]+)", ()=>{});

module.exports = routes;