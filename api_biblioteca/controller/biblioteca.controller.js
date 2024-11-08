const conn = require ("../sql-connection");
    //só tomando erro para cadastrar, o erro ta indo, cadastro nao
module.exports = {
    cadastrar: async (req, res) => {
        const {livros, status} = req.body;
        var total = 0;

        try {
             livros = await conn.select()
            .from("livros")
            .where({id: id_livros});
        
        if(livros.length <= 0) {
            return res.status(400).send({msg:`O código ${id_livros} não existe!`});
        }

             livros = await conn.select().from("livros").where({id: id_livros});
        
            await conn("livros").insert({
                livros,
                status,
            });
            
        } catch (error) {
            return res.status(500).send({msg:"Erro ao cadastrar livro!"});

        }
    
    }
    
};

