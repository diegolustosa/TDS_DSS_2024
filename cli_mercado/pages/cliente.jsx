import { useEffect, useState } from "react";
import Api from "../src/Api"

function Cliente() {

    const [cliente, setCliente] = useState();
    const [Nome, setNome] = useState();
    const [Telefone, setTelefone] = useState();


    // const salvarCliente  = () {


    //    Api.post("cliente", novoCliente)
    //         .then((response) => {
    //             console.log("Cliente salvo com sucesso:", response.data);
    //             // Atualizar a tabela de clientes, se necessário
    //             setCliente(response.data);
    //         })
    //         .catch((error) => {
    //             console.error("Erro ao salvar cliente:", error);
    //         });
    // };

    useEffect(() => {
        Api.get("cliente").then((response) => {
            setCliente(response.data);
            console.log(response.data)
        });


    }, []);

    const salvarCliente = () => {
        Api.post("cliente").then((response) => {
            setNome(response.data);
            setNumero(response.data);
            console.log(response.data);

        });
    };
    return (
        <div className="container">

            <h1 className="text-uppercase display-6">Cliente</h1>
            <form action="#">

                <div form-group>
                    <label>Nome</label>
                    <input type="text" className="form-control" placeholder="Nome"
                        onChange={(e) => {
                            setNome(e.target.value);
                        }}
                    ></input>
                </div>

                <div form-group>
                    <label>Telefone</label>
                    <input type="number" className="form-control" placeholder="telefone"
                        onChange={(e) => {
                            setTelefone(e.target.value);
                        }}

                    />
                </div>

            </form>

            <div className="form-group">
                <button onClick={salvarCliente} className="btn btn-primary">
                    Salvar
                </button>
            </div>

            <table className="table table-striped">
                <thead className="thead-dark">
                    <tr>
                        <th scope="col">#ID</th>
                        <th scope="col">NOME</th>
                        <th scope="col">TELEFONE</th>
                        <th scope="col">STATUS</th>
                    </tr>
                </thead>
                <tbody>

                    {cliente?.map((item, index) => (
                        <tr key={index}>
                            <th scope="row">{item.id}</th>
                            <td>{item.Nome}</td>
                            <td>{item.Telefone}</td>
                            <td>{item.Status}</td>
                        </tr>
                    ))}

                    {/* <tr>
                        <th scope="row">1</th>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                    </tr> */}
                </tbody>
            </table>
        </div>
    )
};


export default Cliente