import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import NavBar from "./layout/NavBar";
import Footer from "./layout/Footer";
import Home from "./pages/Home";
import Eventos from "./pages/Eventos";
import Services from "./pages/Services";
import Equipe from "./pages/Equipe";
import Galeria from "./pages/Galeria";

function App() {
  return (
    <Router>
      <div>
        <NavBar />
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/equipe" element={<Equipe />} />
            <Route path="/galeria" element={<Galeria />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
