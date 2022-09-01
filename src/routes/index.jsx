import { Route, Routes } from "react-router-dom"
import { Form } from "../pages/form"
import { Home } from "../pages/home"

function PageRoutes () {
    return (
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/pontos/novo" element={<Form />}/>
        </Routes>
    )
}

export default PageRoutes