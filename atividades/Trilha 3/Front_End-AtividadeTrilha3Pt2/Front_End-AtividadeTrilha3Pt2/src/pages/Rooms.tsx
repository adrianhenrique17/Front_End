import { useNavigate } from "react-router";
import "../pagesCss/Rooms.css";

const Rooms = () => {
  const navigate = useNavigate();

  function quartoIndisponivel() {
    window.alert("Quarto indisponível/reservado");
  }

  // Lista de quartos corretamente declarada
  const rooms = [
    { id: 1, name: "Quarto Master", available: false },
    { id: 2, name: "Quarto Médio", available: false },
    { id: 3, name: "Quarto Barato", available: true },
  ];

  return (
    <div className="Rooms-container">
      <button onClick={() => navigate("/")}>Ir para Home</button>
      <h1>Lista de quartos disponíveis</h1>
      <h3>Faça sua reserva</h3>

      <ul>
        {rooms.map((room) => (
          <li key={room.id}>
            {room.name} | {room.available ? "Disponível" : "Indisponível"}
            {room.available ? (
              <button onClick={() => navigate(`/roomDetails/${room.id}`)}>
                Ir ao quarto
              </button>
            ) : (
              <button onClick={quartoIndisponivel}>Ir ao quarto</button>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Rooms;
