const conn = require ("../sql-connection");

module.exports = {
    cadastrar: async (req, res) => {
        const {id_alunos, id_livros, quantidade} = req.body;
        var total = 0;

        try {
            const aluno = await conn.select()
            .from("aluno")
            .where({id: id_aluno});
        
        if(aluno.length <= 0) {
            return res.status(400).send({msg:`O código ${id_alunos} não existe!`});
        }

        const livros = await conn.select().from("livros").where({id: id_livros});

        if(aluno.length <= 0) {
            return res.status(400).send({msg: `O código ${id_livros} não é válido!`})
        }
        
            await conn("livros").insert({
                id_aluno,
                id_livros,
                quantidade,
            });
            
        } catch (error) {
            return res.status(500).send({msg:"Erro ao cadastrar livro!"});

        }
    
    }
    
};

