module.exports = {
    module.exports = ({
        cadastro: (req, res) => {
            const { nome, telefone } = req.body;
    
            var comando = ``;
    
            if (!id_aluno && id_livros) { 
                comando = `INSERT INTO RESERVAS(, 
                telefone) VALUES('${nome}',null)`//MUDA ESSAS REGRAS ESTÃO RUINS E INADEQUADAS
            } else {
                comando = `INSERT INTO ALUNO(nome, 
                telefone) VALUES('${nome}','${telefone}')`
            }
    
            conn.raw(comando) //ISSO TA CORRETO
                .then((data) => {
                    res.status(200).send({ msg: "Aluno cadastrado com sucesso!" });
                })
                .catch((error) => {
                    res.status(500).send("Erro ao cadastrar o aluno!");
                });
    
        },