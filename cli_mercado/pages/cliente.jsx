import { useEffect, useState } from "react";
import Api from "../src/Api"

function Cliente() {

    const [cliente, setCliente] = useState();

    useEffect(() => {
        Api.get("cliente").then((response) => {
            setCliente(response.data);
            console.log(response.data)
        });
    }, []);

    return (
        <div className="container">
            <h1>Cliente</h1>
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
        </div>
    )
}

export default Cliente