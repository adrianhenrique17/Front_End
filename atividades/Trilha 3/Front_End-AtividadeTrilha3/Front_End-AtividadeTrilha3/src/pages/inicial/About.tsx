import { useNavigate } from "react-router";

const Home = () => {
  const navigate = useNavigate();

  const irhome = () => {
    navigate("/");
  };

  return (
    <div>
      <h1> Você está em about</h1>
      <button onClick={irhome}>ir para home</button>
    </div>
  );
};

export default Home;

//slr
