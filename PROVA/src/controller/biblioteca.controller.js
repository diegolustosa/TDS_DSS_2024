const db = require("../db-conn");
module.exports = ({

    inserirLivros: async (request, response) => {
        const { Titulo, Genero, id_autor} = request.body;

        if (!Titulo || !Genero || !id_autor) {
            return response.status(400).json({ mensagem: "Todos os campos são obrigatórios!" });
          }
        
          try {
            
            const autor = await db('Autores').where('id', id_autor).first();
            if (!autor) {
              return response.status(400).json({ mensagem: 'Autor não encontrado!' });
            }
        
            
            await db('Livros').insert({
              TITULO: Titulo,      
              ID_AUTOR: id_autor,  
              GENERO: Genero      
            });
        
            
            response.status(200).json({ msg: "Livro cadastrado com sucesso!" });
        } catch (error) {
            response.status(500).send({ msg: `Erro ao cadastrar livro! ${error}`});
        }
    },

    inserirAutores: async (request, response) => {
        const { Nome, Nacionalidade } = request.body;

        try {
            if (!Nome || !Nacionalidade ) {
                response.status(309).send("Os campos nome e nacionalidade são OBRIGATÓRIOS!")
            };

            await conn.raw(`INSERT INTO AUTORES(NOME, NACIONALIDADE) VALUES("${Nome}", "${Nacionalidade}")`);
            
            response.status(200).send({ msg: "Autor cadastrado com sucesso!" })
        } catch (error) {
            response.status(500).send({ msg: `Erro ao cadastrar autor! ${error}`});
        }
    },

    consultarLivros: async (request, response) => {
        try {
            const data = await db.select('*').from('Livros');
            response.status(200).send(data);
        } catch (error) {
            console.log(error)
            response.status(500).send({ msg: "Erro ao carregar lista" });
        }
        //response.status(200).send({msg: "consultar!"})
    },

    consultarAutores: async (request, response) => {
        try {
            const data = await db.select('*').from('Autores');
            response.status(200).send(data);
        } catch (error) {
            response.status(500).send({ msg: "Erro ao carregar lista" });
        }
        //response.status(200).send({msg: "consultar!"})
    },

    atualizarLivros: async (request, response) => {
        const {id} = request.params;
        const {Titulo, Genero} = request.body;
        try {
            db('Livros').where({ id: id }).update("Titulo", "Genero");
        response.status(200).send({ msg: "Livro atualizado com sucesso" });
        } catch {
            response.status(500).send({msg: "Erro ao atualizar livro!"})
        }
    },

    atualizarAutores: async (request, response) => {
        const {id} = request.params;
        const {Nome, Nacionalidade} = request.body;
        try {
            db('Autores').where({ id: id }).update("Nome", "Nacionalidade");
            response.status(200).send({ msg: "Autor atualizado com sucesso" });
        } catch {
            response.status(500).send({msg: "Erro ao atualizar autor"})
        }
    },

    deletarLivro: async (request, response) => {
        const { id } = request.params;

        try {
            await db('Livros').del().where('id', '=', id);
            response.status(200).send({ msg: "Livro deletado com sucesso" });
        }
        catch (error) {
            response.status(500).send({ msg: "Erro ao deletar livro!" });
            console.log(error);
        }
    },
    
    deletarAutor: async (request, response) => {
        const { id } = request.params;

        try {
            await db('Autor').del().where('id', '=', id);
            response.status(200).send({ msg: "Autor deletado com sucesso" });
        }
        catch (error) {
            response.status(500).send({ msg: "Erro ao deletar autor" });
        }
    }
})