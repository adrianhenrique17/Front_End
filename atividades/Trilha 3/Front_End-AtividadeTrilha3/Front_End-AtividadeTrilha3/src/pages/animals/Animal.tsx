import { useParams } from "react-router-dom";

const Animal = () => {
  const { name } = useParams<{ name: string }>();

  return (
    <div>
      <h1>Animal: {name}</h1>
      <p>Aqui jas um {name}</p>
    </div>
  );
};

export default Animal;
