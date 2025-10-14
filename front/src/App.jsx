import "./App.css";
import Haku_lomake from "./components/HakuComponent";
import Lisays_lomake from "./components/LisaysComponent";
import Paivitys_lomake from "./components/PaivitysComponent";
import Poisto_lomake from "./components/PoistoComponent";

import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      {/* Navigation */}
      <nav>
        <Link to="/Haku">Etsi urheilija</Link> |{" "}
        <Link to="/Lisays">Lisää urheilija</Link> |{" "}
        <Link to="/Paivitys">Päivitä urheilijaa</Link> |{" "}
        <Link to="/Poisto">Poista urheilija</Link>
      </nav>

      {/* Routes */}
      <Routes>
        <Route path="/Haku" element={<Haku_lomake />} />
        <Route path="/Lisays" element={<Lisays_lomake />} />
        <Route path="/Paivitys" element={<Paivitys_lomake />} />
        <Route path="/Poisto" element={<Poisto_lomake />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
