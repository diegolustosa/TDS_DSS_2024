//crud
const conn = require("../db.conn");
module.exports = ({

    inserir: async (request, response) => {
        const { nome, email } = request.body;

        try {
            if (!nome) {
                response.status(309).send("O campo nome eh obrigatorio")
            };

            await conn.raw(`INSERT INTO PESSOAS(NOME, EMAIL) VALUES("${nome}", "${email}")`);
            
            response.status(200).send({ msg: "Pessoa cadastrada com sucesso" })
        } catch (error) {
            response.status(500).send({ msg: `Erro ao cadastrar pessoa! ${error}`});
        }
    },

    consultar: async (request, response) => {
        try {
            const data = await conn.raw("SELECT * FROM PESSOAS");
            response.status(200).send(data[0]);
        } catch (error) {
            response.status(500).send({ msg: "Erro ao carregar lista" });
        }
        //response.status(200).send({msg: "consultar!"})
    },
    atualizar: async (request, response) => {
        const {id} = request.params;
        const {nome, email} = request.body;
        try {
        await conn.raw(`UPDATE PESSOAS SET NOME = "${nome}", EMAIL= "${email}" WHERE ID= "${id}"`);
        response.status(200).send({ msg: "Pessoa atualizada com sucesso" });
        } catch {
            response.status(500).send({msg: "Erro ao atualizar"})
        }
    },
    deletar: async (request, response) => {
        const { id } = request.params;

        try {
            await conn.raw(`DELETE FROM PESSOAS WHERE ID = ${id}`);
            response.status(200).send(id);
        }
        catch (error) {
            response.status(500).send({ msg: "Erro ao deletar pessoa" });
        }
    }
})