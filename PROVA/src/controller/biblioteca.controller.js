const conn = require("../db-conn");
module.exports = ({

    inserirLivros: async (request, response) => {
        const { Título, Genero, id_autor} = request.body;

        try {
            if (!Título || !Genero ) {
                response.status(309).send("Todos os campos são obrigatórios!")
            };
            

            id_autor = await conn.select().from("Autores").where({id_autor: id});
            await conn.raw(`INSERT INTO LIVROS(TITULO, id_autor ,GENERO) VALUES("${Título}", ${id_autor}, "${Genero}")`);
            
            response.status(200).send({ msg: "Livro cadastrado com sucesso" })
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
            const data = await conn.raw("SELECT * FROM LIVROS");
            response.status(200).send(data[0]);
        } catch (error) {
            response.status(500).send({ msg: "Erro ao carregar lista" });
        }
        //response.status(200).send({msg: "consultar!"})
    },

    consultarAutores: async (request, response) => {
        try {
            const data = await conn.raw("SELECT * FROM AUTORES");
            response.status(200).send(data[0]);
        } catch (error) {
            response.status(500).send({ msg: "Erro ao carregar lista" });
        }
        //response.status(200).send({msg: "consultar!"})
    },

    atualizarLivros: async (request, response) => {
        const {id} = request.params;
        const {Título, Genero} = request.body;
        try {
        await conn.raw(`UPDATE PESSOAS SET NOME = "${Título}", Genero= "${Genero}" WHERE ID= "${id}"`);
        response.status(200).send({ msg: "Livro atualizado com sucesso" });
        } catch {
            response.status(500).send({msg: "Erro ao atualizar livro!"})
        }
    },

    atualizarAutores: async (request, response) => {
        const {id} = request.params;
        const {Nome, Nacionalidade} = request.body;
        try {
        await conn.raw(`UPDATE AUTORES SET NOME = "${Nome}", Nacionalidade= "${Nacionalidade}" WHERE ID= "${id}"`);
        response.status(200).send({ msg: "Autor atualizado com sucesso" });
        } catch {
            response.status(500).send({msg: "Erro ao atualizar autor"})
        }
    },

    deletarLivro: async (request, response) => {
        const { id } = request.params;

        try {
            await conn.raw(`DELETE FROM LIVROS WHERE ID = ${id}`);
            response.status(200).send(id);
        }
        catch (error) {
            response.status(500).send({ msg: "Erro ao deletar livro!" });
        }
    },
    
    deletarAutor: async (request, response) => {
        const { id } = request.params;

        try {
            await conn.raw(`DELETE FROM AUTORES WHERE ID = ${id}`);
            response.status(200).send(id);
        }
        catch (error) {
            response.status(500).send({ msg: "Erro ao deletar autor" });
        }
    }
})