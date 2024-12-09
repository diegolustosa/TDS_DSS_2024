import { useEffect, useState } from "react";
import Api from "../src/Api"

function Cliente() {

    const [cliente, setCliente] = useState();

    const [nome, setNome] = useState("");
    const [telefone, setTelefone] = useState("");

    const [msgAviso, setMsgAviso] = useState("");
    const [msgSucesso, setMsgSucesso] = useState("");


    useEffect(() => {
        carregarDados()
    }, []);

    function carregarDados() {
        Api.get("cliente").then((response) => {
            setCliente(response.data);
            // console.log(response.data)
        });
    }

    function salvar() {
        Api.post('cliente', { nome, telefone }).then((response) => {

            if (response.status == 200) {
                carregarDados();
                setNome("");
                setTelefone("");

                setMsgSucesso(response.data.msg);
                setTimeout(() => {
                    setMsgSucesso("")
                }, "5000")

            } else if (response.status == 309) {
                setMsgAviso(response.data.msg);
                setTimeout(() => {
                    setMsgAviso("")
                }, "5000");
            }
        });
    }

    return (
        <div className="container">

            {msgAviso == ""
                ? ""
                : <div className="alert alert-warning" role="alert">
                    {msgAviso}
                </div>
            }

            {msgSucesso == ""
                ? ""
                : <div className="alert alert-success" role="alert">
                    {msgSucesso}
                </div>
            }

            <h1 className="text-uppercase display-6">Cliente</h1>
            {nome} - {telefone}
            <form action="#">
                <div className="form-group">
                    <label>Nome</label>
                    <input type="text" className="form-control" placeholder="Nome"
                        onChange={(e) => {
                            setNome(e.target.value)
                        }}
                        value={nome}
                    />
                </div>
                <div className="form-group">
                    <label>Telefone</label>
                    <input type="number" className="form-control" placeholder="Telefone"
                        onChange={(e) => {
                            setTelefone(e.target.value)
                        }}
                        value={telefone}
                    />
                </div>
                <div className="form-group">
                    <button className="btn btn-primary btn-lg btn-block"
                        onClick={() => {
                            salvar()
                        }}
                    >Salvar</button>
                </div>
            </form >

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
                            <td>{item.nome}</td>
                            <td>{item.telefone}</td>
                            <td>{item.status}</td>
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
        </div >
    )
}

export default Cliente