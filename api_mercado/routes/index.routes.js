const routes = require("express").Router();
const clienteRouter = require("./cliente.router");
const produtoRouter = require("./produto.router");
const pedidoRouter = require("./pedido.router");

routes.use("/Cliente", clienteRouter);
routes.use("/Produto", produtoRouter);
routes.use("/Pedido", pedidoRouter);

module.exports = routes;