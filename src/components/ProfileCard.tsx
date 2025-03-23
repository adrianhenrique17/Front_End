import "../assets/cebolao.jfif";
import "./ProfileCard.css";

interface ProfileCardProps {
  nome: string;
  descricao: string;
  foto: string;
}

const ProfileCard = ({ nome, descricao, foto }: ProfileCardProps) => {
  return (
    <div>
      <img className={foto} src={foto} alt={`${nome}`} />
      <h2 className={nome}>{nome}</h2>
      <p className={descricao}>{descricao}</p>
    </div>
  );
};

export default ProfileCard;
