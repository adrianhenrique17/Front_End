import { useNavigate } from "react-router";

const Home = () => {
  const navigate = useNavigate();

  const irAbout = () => {
    navigate("/about");
  };

  return (
    <div>
      <button onClick={irAbout}>ir para about</button>
    </div>
  );
};

export default Home;
