import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "./pages/inicial/Home";
import About from "./pages/inicial/About";
import Contact from "./pages/inicial/Contact";
import Animal from "./pages/animals/Animal";

const App = () => {
  return (
    <Router>
      <nav>
        <p>
          <Link to="/">Home</Link>
        </p>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <Link to="/animal/cachorro">Cachorro</Link>
        </li>
        <li>
          <Link to="/animal/piriquito">Piriquito</Link>
        </li>
        <li>
          <Link to="/animal/jaguatirica">Jaguatirica</Link>
        </li>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />

        <Route path="/animal/:name" element={<Animal />} />
      </Routes>
    </Router>
  );
};

export default App;
