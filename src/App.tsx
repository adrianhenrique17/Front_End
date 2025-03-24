import { BrowserRouter, Route, Routes } from "react-router";
import Contar from "./components/Contador";
import Saudacao from "./components/Saudacao";
import ListaTarefas from "./components/ListaTarefas";
import ToggleVisibilidade from "./components/ToggleVisibildade";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Contar />} />
        <Route path="/saudacao" element={<Saudacao nomeInicial="Adrian" />} />
        <Route
          path="/listatarefas"
          element={
            <ListaTarefas
              Itens={["aula cláudia", "Estudar React", "Fazer exercícios"]}
            />
          }
        />
        <Route
          path="/visibilidade"
          element={<ToggleVisibilidade texto="Oculta ae patrão" />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
