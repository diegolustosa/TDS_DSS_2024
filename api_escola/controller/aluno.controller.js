
const alunos = [];

//CRUD
module.exports = ({
    cadastrar: (req, res) => {

        alunos.push(req.body);

        return res.send(req.body);
    },
    consultar: (req, res) => {
        return res.send(alunos);
    },
    atualizar: (req, res) => {

        const { nome, email, id } = req.body;

        alunos.filter(item => {
            if (item.id == id) {
                item.nome = nome;
                item.email = email;
                return res.send("Aluno atualizado com sucesso!");
            }
        })

        return res.status(400).send("Aluno não encontrado!");

    },
    deletar: (req, res) => {

        const { id } = req.params;

        const index = alunos.findIndex(item => item.id == id);

        if (index === -1) {
            return res.status(400).send("id do aluno não existe")
        }

        alunos.splice(index, 1);

        return res.send(alunos);
    },
    buscaPorId: (req, res) => {

        const { id } = req.params;

        const aluno = alunos.filter(item => item.id == id);

        if (!aluno.length) {
            res.status(400).send("Aluno não encontrado!");
        }

        res.send(aluno);

    }
})