import { Routes, Route } from "react-router-dom"
import Menu from "../src/components/Menu.jsx"
import Inicio from "./components/Inicio.jsx"
import Utensillos from "./components/Utensillos.jsx"
import Muebles from "./components/Muebles.jsx"

function App() {
  return (
    <>
    <Menu />
       <Routes>       
        <Route path="/" element={<Inicio />} />
        <Route path="/utensillos" element={<Utensillos />} />
        <Route path="/muebles" element={<Muebles />} />
      </Routes>
    </>
  )
}

export default App

