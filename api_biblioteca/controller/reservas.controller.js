const conn = require ("../sql-connection");
    //fazer isso funcionar
    module.exports = {
        cadastrarReserva: async (req, res) => {
            try {
                // 1. Receber os dados enviados na requisição
                const { alunos, livroId } = req.body; // 'nomeAluno' e 'livroId' enviados no corpo da requisição
        
                // 2. Consultar se o aluno já existe
                const alunos = await conn.raw("SELECT id FROM alunos WHERE nome = ?", [nome]);
        
                if (aluno.length === 0) {
                    return res.status(404).send("Aluno não encontrado!");
                }
        
                const alunoId = aluno[0].id;
        
                // 3. Verificar se o livro está disponível
                const livro = await conn.raw("SELECT id FROM livros WHERE id = ? AND disponibilidade = true", [livroId]);
        
                if (livro.length === 0) {
                    return res.status(404).send("Livro não disponível para reserva!");
                }
        
                // 4. Registrar a reserva do livro para o aluno
                await conn.raw("INSERT INTO reservas (id_aluno, livro_id) VALUES (?, ?)", [alunoId, livroId]);
        
                // 5. Atualizar a disponibilidade do livro para 'false' (marcando como reservado)
                await conn.raw("UPDATE livros SET disponibilidade = false WHERE id = ?", [livroId]);
        
                res.status(201).send({ msg: "Reserva cadastrada com sucesso!" });
        
            } catch (error) {
                console.log(error);
                res.status(500).send("Erro ao cadastrar a reserva");
            }
        },
        

    consultar: (req, res) => {
        conn.raw("SELECT * FROM biblioteca WHERE disponibilidade == true").then((data) => {
            res.status(200).send(data[0]);
        }).catch((erro) => {
            console.log(erro);
            res.status(500).send("Erro ao consultar os livros!");
        });
        }
    };