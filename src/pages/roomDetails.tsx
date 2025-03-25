import CardRooms from "../components/CardRoom";
import foto from "../assets/quartoLixo.jpg";
import { useNavigate, useParams } from "react-router";

const RoomDetails = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate(); //inicia o hook

  return (
    <div className="Room-container">
      <h1>Este é o nosso quarto {id}</h1>
      <CardRooms
        nome="Quarto Barato"
        descricao="Esse é o nosso quarto o mais básico porem bom "
        foto={foto}
      />
      <button onClick={() => navigate(`/BookingSucess`)}>Reservar</button>
    </div>
  );
};

export default RoomDetails;
