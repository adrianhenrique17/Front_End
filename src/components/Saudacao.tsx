import { useState } from "react";

//definindo oque vai ter no componente
type SaudacaoProps = {
  nomeInicial: string;
};

function Saudacao({ nomeInicial }: SaudacaoProps) {
  const [nome, setNome] = useState(nomeInicial);

  return (
    <div>
      <h1>Saudações, {nome}!!</h1>
      <input
        type="text"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
        placeholder="Digite seu nome"
      />
    </div>
  );
}

export default Saudacao;
