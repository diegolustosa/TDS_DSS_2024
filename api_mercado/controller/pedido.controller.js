const conn = require ("../mysql-connection");
const cors = require('cors');

module.exports = {
    cadastrar: async (req, res) => {
        const {id_cliente, id_produto, quantidade} = req.body;
        var total = 0;

        try {
            const cliente = await conn.select()
            .from("cliente")
            .where({id: id_cliente});
        
        if(cliente.length <= 0) {
            return res.status(400).send({msg:`O código ${id_cliente} não existe!`});
        }

        const produto = await conn.select().from("produto").where({id: id_produto});

        if(produto.length <= 0) {
            return res.status(400).send({msg: `O código ${id_produto} não é válido!`})
        }
        
        var total = quantidade * produto[0].preco;

            await conn("pedido").insert({
                id_cliente,
                id_produto,
                quantidade,
                total,
            });
            
        } catch (error) {
            return res.status(500).send({msg:"Erro ao cadastrar pedido"});

        }
    
    }
};

