const turmas = [];

//CRUD
module.exports = ({
    cadastrar: (req, res) => {

        turmas.push(req.body);

        return res.send(req.body);
    },
    consultar: (req, res) => {
        return res.send(turmas);
    },
    atualizar: (req, res) => {

        const { nomeTurma, numeroT } = req.body;

        turmas.filter(item => {
            if (item.numeroT == numeroT) {
                item.nomeTurma = nome;
                return res.send("A turma foi atualizada com sucesso!");
            }
        })

        return res.status(400).send("Turma não encontrada!");

    },
    deletar: (req, res) => {

        const { numeroT } = req.params;

        const index = turmas.findIndex(item => item.numeroT == numeroT);

        if (index === -1) {
            return res.status(400).send("número da turma não existe")
        }

        turmas.splice(index, 1);

        return res.send(turmas);
    },
    buscaPorTurma: (req, res) => {

        const { numeroT } = req.params;

        const turmas = turmas.filter(item => item.numeroT == numeroT);

        if (!turmas.length) {
            res.status(400).send("Turma não encontrada!");
        }

        res.send(turmas);

    },
    consultaNaTurma: (req, res) => {
        const { turma } = req.params;

        const professoresNaTurma = listaProfessores.filter(item => item.turma === turma);
        const alunosNaTurma = listaAlunos.filter(item => item.turma === turma);

        if (!professoresNaTurma.length && !alunosNaTurma.length) {
            return res.status(404).send("Nenhum professor ou aluno encontrado nessa turma!");
        }

        res.send({
            professores: professoresNaTurma,
            alunos: alunosNaTurma
        });
    }
});