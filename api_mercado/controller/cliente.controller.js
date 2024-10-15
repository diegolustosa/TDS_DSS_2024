const conn = require("../mysql-connection");
const clientes = [];

module.exports = ({
    cadastro: (req, res) => {
    const {nome, email, telefone} = req.body;
    var comando = ``;
    
    if(!nome || !email || !telefone) {
        comando = `insert into cliente(nome, telefone) VALUES('${nome}', null)`
     } else {
        comando = `insert into cliente(nome, telefone) values('${nome}', ${telefone})`
     }

    conn.raw(comando)
        .then((data) => {
        res.status(200).send({msg: "Cliente cadastrado com sucesso!"});
    })
        .catch((error) => {
        res.status(500).send("Erro ao cadastrar um cliente!");
    });
    }, 
    
    consultar: (req, res) => {
        conn.raw("SELECT * FROM cliente")
            .then((data) => {
                res.status(200).send(data[0]); 
            })
            .catch((error) => {
                console.error(error); 
                res.status(500).send("Erro ao consultar os clientes!");
            });
    },
    atualizar: (req, res) => {
        varcomando2 = ``;
        conn.raw(`update cliente(nome, telefone, email) set values ('${nome}', '${telefone}, '${email})`)
     },
    deletar: (req, res) => { },
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