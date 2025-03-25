import { BrowserRouter, Link, Route, Routes } from "react-router";
import Home from "./pages/Home";
import Rooms from "./pages/Rooms";
import RoomDetails from "./pages/roomDetails";
import BookingSucess from "./pages/BookingSucess";
import "./App.css";

const App = () => {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/rooms">Rooms</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/rooms" element={<Rooms />} />
        <Route path="/BookingSucess" element={<BookingSucess />} />
        <Route path="/RoomDetails/:id" element={<RoomDetails />} />
        {/*essa é rota dinamica*/}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
