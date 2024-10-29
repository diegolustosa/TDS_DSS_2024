const conn = require("../mysql-connection");
const produtoController = require("./produto.controller");

//crud
module.exports = {
    cadastro: async (req, res) => {
        var addUser = '';
        try{
            addUser = await conn.raw(`INSERT INTO PRODUTO(nome, preco) VALUES('${nome}`, `${preco}`);
        } catch(error) {
            console.log(error);
            return res.status(500).send({msg: "Erro ao inserir produto"});
        }
    },
    consultar: async (req, res) => {
try{

       const data = await conn.raw("SELECT * FROM PRODUTO");
    } catch (error) {
        console.log(error);
        return res.status(500).send({msg: "Erro ao consultar os produtos!"});
    }
       console.log(data)
       res.send(data[0])
       
        /* conn.raw()
        .then((data) => { })
        .catch((error) => { }) */
    },
    atualizar: (req,res) => {},
    deletar: (req, res) => {},
};