import Button from "./components/button.tsx";
import ProfileCard from "./components/ProfileCard.tsx";
import foto from "./assets/cebolao.jfif";
import Gallery from "./components/Gallery.tsx";
import foto1 from "./assets/dog1.jfif";
import foto2 from "./assets/dog2.jpg";
import Navbar from "./components/navBar.tsx";
import ContactForm from "./components/ContactForm.tsx";

const imageUrls = [foto1, foto2];

function App() {
  return (
    <div>
      <div>
        <Navbar />
        <h1>Bem-vindo ao meu do cebolão do DS!</h1>
        <p>Explore nossos conteúdos.</p>
      </div>
      <Button />
      <ProfileCard
        nome="cebolao"
        descricao="Ele é o siegmeyer  de dark souls "
        foto={foto}
      />

      <div>
        <h1>Cachorros favoritos do cebola</h1>
        <Gallery images={imageUrls} />
      </div>

      <div>
        <h1>Entre em Contat com o cebola</h1>
        <ContactForm />
      </div>
    </div>
  );
}

export default App;
