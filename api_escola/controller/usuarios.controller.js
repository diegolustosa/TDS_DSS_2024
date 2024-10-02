module.exports = ({
    cadastro: ("/cadastro", (request, response) => {

        const { id, nome, email, senha } = request.body;

        if (!id) {
            return response.status(400).send("É obrigatorio enviar o campo id!");
        } else if (!nome) {
            return response.status(400).send("É obrigatorio enviar o campo nome!");
        } else if (!email) {
            return response.status(400).send("É obrigatorio enviar o campo email!");
        } else if (!senha) {
            return response.status(400).send("É obrigatorio enviar o campo senha!");
        }

        usuarios.filter((item) => {
            if (item.id == id) {
                return response.status(404).send(`O código ${id} já está em uso!`)
            }
        });

        usuarios.push(request.body);

        return response.status(200).send(request.body);

    }),
    consulta: ("/consulta", (request, response) => {
        return response.status(200).send(usuarios);
    }),
    consultaPorId: ("/consulta/:id([0-9]+)", (request, response) => {
        const { id } = request.params;

        const usuarios = usuarios.filter(item => item.id == id);

        if (!usuarios.length) {
            return response.status(400).send("O código do cliente é inválido!");
        }

        return response.send(usuarios);

    })

    //COLOCAR AQUI REGRAS DE INSERÇÃO, CONSULTA, DELETAR E ATUALIZAR
    //PARA ALUNOS, PROFESSORES E TURMA
});