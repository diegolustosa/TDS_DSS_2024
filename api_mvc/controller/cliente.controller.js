
const clientes = [{
    id: 1,
    nome: "Guilherme Pires",
    email: "guilherme.pires@gmail.com",
    senha: "123456"
}]; 


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

        clientes.filter((item) => {
            if (item.id == id) {
                return response.status(404).send(`O código ${id} já está em uso!`)
            }
        });

        clientes.push(request.body);

        return response.status(200).send(request.body);

    }),
    consulta: ("/consulta", (request, response) => {
        return response.status(200).send(clientes);
    }),
    consultaPorId: ("/consulta/:id([0-9]+)", (request, response) => {
        const { id } = request.params;

        const cliente = clientes.filter(item => item.id == id);

        if (!cliente.length) {
            return response.status(400).send("O código do cliente é inválido!");
        }

        return response.send(cliente);

    })
});