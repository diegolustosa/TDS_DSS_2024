//crud
const conn = require("../db.conn");
module.exports = ({
    inserir: (request, response) => {
        response.status(200).send({msg: "Olá mundo!"})
     },
    consultar: async (request, response) => {
        try {
            const data = await conn.raw("SELECT * FROM PESSOAS");
            response.status(200).send(data[0]);
        } catch(error) {
            response.status(500).send({msg:"Erro ao carregar lista"});
        }
            response.status(200).send({msg: "consultar!"})
     },
    atualizar: (request, response) => {
        response.status(200).send({msg: "atualizar"})
     },
    deletar: (request, response) => {
        response.status(200).send({msg: "deletar"})
     },
})