import { useState } from "react";

type ToggleVisibilidadeProps = {
  texto: string;
};

function ToggleVisibilidade({ texto }: ToggleVisibilidadeProps) {
  const [visivel, setVisivel] = useState<boolean>(false);

  const alternarVisibilidade = () => {
    setVisivel(!visivel); // Inverte o valor de 'visivel' (se true vira false, e vice-versa)
  };

  return (
    <div>
      {visivel && <p>{texto}</p>}

      <button onClick={alternarVisibilidade}>
        {visivel ? "ocultar" : "mostrar"}
      </button>
    </div>
  );
}

export default ToggleVisibilidade;
