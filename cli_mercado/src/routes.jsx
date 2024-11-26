import { BrowserRouter, Route, Routes } from "react-router-dom"
import Cliente from "../pages/Cliente"
import Produto from "../pages/Produto"
import Pedido from "../pages/Pedido"


function AppRoutes() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/Cliente" element={<Cliente />}></Route>
                    <Route path="/Produto" element={<Produto />}></Route>
                    <Route path="/Pedido" element={<Pedido />}></Route>
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default AppRoutes