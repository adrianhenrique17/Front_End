import { useState } from "react";

type ListaTarefasProps = {
  Itens: string[]; //esse [] deixa adicionar vários itens
};

// aqui é uma função usando o useState para definir os estados hook
function ListaTarefas({ Itens }: ListaTarefasProps) {
  const [tarefas, setTarefas] = useState(Itens);
  const [novaTarefa, setNovaTarefa] = useState("");

  // funçãozinha para adicionar as novas tarefitas
  const adicionarTarefas = () => {
    if (novaTarefa.trim() !== "") {
      setTarefas([...tarefas, novaTarefa]); //add tarefa, ... desestruturação de array
      setNovaTarefa(""); //limpa o input
    }
  };

  return (
    <div>
      <h1> lISTA DE TAREFAS</h1>

      <input
        type="text"
        value={novaTarefa}
        onChange={(e) => setNovaTarefa(e.target.value)}
        placeholder="digite uma tarefa"
      />

      <button onClick={adicionarTarefas}>Adicionar</button>

      {/* Renderiza a lista de tarefas */}
      <ul>
        {tarefas.map((tarefa: string, index: number) => (
          <li key={index}>{tarefa}</li>
        ))}
      </ul>
    </div>
  );
}

export default ListaTarefas;
