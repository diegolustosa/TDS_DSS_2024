const listaProfessores = [];

//CRUD
module.exports = ({
    cadastrar: (req, res) => {

        listaProfessores.push(req.body);

        return res.send(req.body);
    },
    consultar: (req, res) => {
        return res.send(listaProfessores);
    },
    atualizar: (req, res) => {

        const { nome, email, ra } = req.body;

        const professor = listaProfessores.filter(item => {
            if (item.ra == ra) {
                item.nome = nome;
                item.email = email;
                return res.send("O professor foi atualizado com sucesso!");
            }
        })

        return res.status(400).send("O professor não foi encontrado!");

    },
    deletar: (req, res) => {

        const { ra } = req.params;

        const index = listaProfessores.findIndex(item => item.ra == ra);

        if (index === -1) {
            return res.status(400).send("O professor não existe")
        }

        listaProfessores.splice(index, 1);

        return res.send(professor);
    },
    buscaPorRa: (req, res) => {

        const { ra } = req.params;

        const professor = listaProfessores.filter(item => item.ra == ra);

        if (!professor.length) {
            res.status(400).send("Aluno não encontrado!");
        }

        res.send(professor);

    }
})