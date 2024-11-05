const conn = require("../sql-connection");

module.exports = ({
    cadastro: (req, res) => {
        const { nome, telefone } = req.body;

        var comando = ``;

        if (!telefone) {
            comando = `INSERT INTO ALUNO(nome, 
            telefone) VALUES('${nome}',null)`
        } else {
            comando = `INSERT INTO ALUNO(nome, 
            telefone) VALUES('${nome}','${telefone}')`
        }

        conn.raw(comando)
            .then((data) => {
                res.status(200).send({ msg: "Aluno cadastrado com sucesso!" });
            })
            .catch((error) => {
                res.status(500).send("Erro ao cadastrar o aluno!");
            });

    },
    consultar: (req, res) => {

        //conn variável que acessa nossa config de banco de dados e raw que faz ações dentro do banco de dados, pesquisando
        //inserindo, o crud em si

        conn.raw("SELECT * FROM ALUNO").then((data) => {
            res.status(200).send(data[0]);
        }).catch((erro) => {
            console.log(erro);
            res.status(500).send("Erro ao consultar os alunos!");
        });

        //OUTRO MÉTODO PARA FAZER CONSULTA USANDO ASYNC E AWAIT
/*CONSULTAR: async (req,res) => {
   try {
        const data = await conn.raw("SELECT * FROM cliente");
        res.send(data[0]);
        } catch (error) {
            res.send("Erro ao consultar os clientes!");
            }
 }, */

    },
    atualizar: (req, res) => {
        const { id, nome, telefone, status } = req.body;

        conn.raw(`UPDATE ALUNOS SET nome='${nome}', 
            telefone='${telefone}', 
            status=${status} WHERE id = ${id}`)
            .then((data) => {
                console.log(data);
                res.status(200).send({ msg: "Aluno atualizado com sucesso!" })
            }).catch((error) => {
                console.log(error);
                res.status(500).send({ msg: "Erro ao atualizar o aluno!" });
            });
    },
    deletar: (req, res) => {
        const { id } = req.params;

        conn.raw(`DELETE FROM ALUNO WHERE ID = ${id}`).then((data) => {
            console.log(data[0].affectedRows);

            if (data[0].affectedRows == 0) {
                return res.status(404).send({ msg: "Nenhum aluno encontrado com esse código!" });
            } else {
                return res.status(200).send({ msg: "Aluno deletado com sucesso!" });
            }

        }).catch((error) => {
            console.log(error);
            return res.status(500).send({ msg: "Erro ao deletar o aluno!" });
        });
    },
    buscaPorId: (req, res) => {
        const { id } = req.params;

        conn.raw(`SELECT * FROM ALUNO WHERE id = ${id}`).then((data) => {
            console.log(data);
            res.status(200).send(data[0]);
        }).catch((error) => {
            console.log(error);
            res.status(500).send("Erro ao consultar o aluno!");
        });
        
    }
})