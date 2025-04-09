import "./CadastrarUser.css";
import React, { useState } from "react";
import axios from "axios";

const CadastrarUsuario: React.FC = () => {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [mensagem, setMensagem] = useState("");

  const cadastrarUsuario = async () => {
    setMensagem("");

    if (!nome || !email) {
      setMensagem("Por favor, preencha todos os campos.");
      return;
    }

    try {
      const response = await axios.post(
        "https://jsonplaceholder.typicode.com/users",
        {
          name: nome,
          email: email,
        }
      );

      if (response.status === 201) {
        setMensagem("Usuário cadastrado com sucesso!");
        setNome("");
        setEmail("");
      } else {
        setMensagem("Erro ao cadastrar o usuário.");
      }
    } catch {
      setMensagem(" Vix moio , Erro ao conectar com a API.");
    }
  };

  return (
    <div style={{ padding: "20px", maxWidth: "400px" }}>
      <h2>Cadastrar Novo Usuário</h2>
      <input
        type="text"
        placeholder="Nome"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
        style={{ padding: "8px", width: "100%", marginBottom: "10px" }}
      />
      <input
        type="email"
        placeholder="E-mail"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        style={{ padding: "8px", width: "100%", marginBottom: "10px" }}
      />
      <button onClick={cadastrarUsuario} style={{ padding: "8px 16px" }}>
        Cadastrar
      </button>

      {mensagem && (
        <div
          style={{
            marginTop: "20px",
            color: mensagem.includes("sucesso") ? "green" : "red",
          }}
        >
          <p>{mensagem}</p>
        </div>
      )}
    </div>
  );
};

export default CadastrarUsuario;
