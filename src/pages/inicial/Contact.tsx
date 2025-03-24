import { useNavigate } from "react-router";

const Contact = () => {
  const navigation = useNavigate();

  return (
    <div>
      <button onClick={() => navigation("/")}>Ir para home</button>
    </div>
  );
};

export default Contact;
