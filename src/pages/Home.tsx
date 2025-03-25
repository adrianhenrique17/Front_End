import hotel from "../assets/hotel.jpg";
import "../pagesCss/Home.css";

const Home = () => {
  return (
    <div className="home-container">
      <h1>Reservas de Hotel</h1>
      <h3>Faça sua reserva</h3>
      <img src={hotel} />
    </div>
  );
};

export default Home;
