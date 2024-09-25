const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

var listaClientes = [];
const clientes = [{
    id: 1,
    nome: "default",
    email: "default@gmail.com",
    senha: "123456"
}]
// comparamos as propriedades com false porque se retornar undefinied
// o código irá entender que é falso e retornará o st
//const existeId = clientes.filter(item =>)


app.get("/consultar_clientes", (request, response) => {
    response.send({ list: clientes });
});

app.post("/cadastro", (request, response) => {
    //ESSA CONST TA DESESTRUTURANDO O OBJETO JSON
    //OU SEJA DA PARA USAR AS PROPRIEDADES ID, NOME, EMAIL E SENHA AQUI NO COD
    const { id, nome, email, senha } = request.body;

    if (id == false) {
        return response.status(400).send("É obrigatório enviar a propriedade id");
    }
    else if (nome == false) {
        return response.status(400).send("É obrigatório enviar a propriedade nome");
    }
    else if (email == false) {
        return response.status(400).send("É obrigatório enviar a propriedade email");
    }
    else if (senha == false) {
        return response.status(400).send("É obrigatório enviar a propriedade senha");
    }


    for (let i = 0; i < clientes.length; i++) {
        if (clientes[i].id == id) {
            return response.status(400).send(`O código ${id} já está em uso`);


            /*clientes.filter((item) => {
                if(item.id == id){
                    return response.status(400).send(`O código ${id} já está em uso`);
                }
            })*/
        }
    }

    clientes.push(request.body);

    return response.status(200).send("Cliente cadastrado com sucesso");
})

// comparamos as propriedades com false porque se retornar undefinied
// o código irá entender que é falso e retornará o st
//const existeId = clientes.filter(item =>)

app.get("/cliente/:id([0-9]+)", (request, response) => {
    return response.send(request.params.id);

    const { id } = request.params;
    const cliente = clientes.find(item => item.id == id);
    return response.send(cliente);
});

app.delete("/cliente/:id([0-9]+)", (request, response) => {
    const {id} = request.params;
    const index = clientes.findIndex(item => item.id == id);

    if(index === -1) {
        return response.status(400).send("código do cliente não existe");
    }
    
    return response.send(request.params.id);
});

app.put("/atualizar", (request, response) => {
    const {id, name, email, senha } = request.body;
    
    clientes.filter(item => {
        if(item.id === id) {
            item.nome = nome;
            item.email = email;
            item.senha = senha;
            return response.send("Cliente atualizado com sucesso");
        }
    })
    return response.send("Cliente não encontrado!");
})

app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000");
});