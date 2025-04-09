import "./CardRoom.css";
interface CardRoomProps {
  nome: string;
  descricao: string;
  foto: string;
}

const CardRooms = ({ nome, descricao, foto }: CardRoomProps) => {
  return (
    <div className="card-room">
      <img className={foto} src={foto} alt={`${nome}`} />
      <h2 className={nome}>{nome}</h2>
      <p className={descricao}>{descricao}</p>
    </div>
  );
};

export default CardRooms;
