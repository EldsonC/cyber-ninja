import { Routes, Route } from "react-router-dom"
import About from "../pages/about"
import Home from "../pages/home"

export default function Routers() {
    return (
        <Routes>
            <Route path="/home" element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
        </Routes>
    )
}