const conn = require("../sql-connection");

module.exports = {
    cadastrar: (req, res) => {
        const { id_livros, id_aluno, status = 'reservado', data_devolucao } = req.body;

        // Verifica se id_livros e id_aluno foram passados, pois são obrigatórios
        if (!id_livros || !id_aluno) {
            return res.status(400).send({ msg: "ID do livro e ID do aluno são obrigatórios!" });
        }

        // Comando para inserir a reserva
        const comando = `
            INSERT INTO reservas (id_livros, id_aluno, status, data_devolucao)
            VALUES (?, ?, ?, ?)
        `;

        // Executando o comando com os parâmetros fornecidos
        conn.raw(comando, [id_livros, id_aluno, status, data_devolucao])
            .then((data) => {
                res.status(200).send({ msg: "Reserva efetuada com sucesso!" });
            })
            .catch((error) => {
                console.error("Erro ao efetuar reserva: ", error);
                res.status(500).send({ msg: "Erro ao efetuar reserva!" });
            });
    }
};
