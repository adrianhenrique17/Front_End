import { BrowserRouter, Route, Routes } from "react-router";
import Login from "./pages/Login";
import Home from "./pages/Home";
import BuscarUsuario from "./components/BuscarUser";
import CadastrarUsuario from "./components/CadastrarUser";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home/:id" element={<Home />} />
        <Route path="/BuscarUsuario" element={<BuscarUsuario />} />
        <Route path="/CadastrarUsuario" element={<CadastrarUsuario />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
