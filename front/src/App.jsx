import "./App.css";
import Haku_lomake from "./components/HakuComponent";
import Lisays_lomake from "./components/LisaysComponent";
import Paivitys_lomake from "./components/PaivitysComponent";
import Poisto_lomake from "./components/PoistoComponent";
import GlobalState from "./contexts/GlobalState";

import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <>
      <GlobalState>
        <BrowserRouter>
          <div className="bg-gray-50 dark:bg-gray-700  min-h-screen p-5">
            {/* Navigation */}
            <nav className="bg-white dark:bg-gray-800  p-4">
              <Link
                to="/Haku"
                className="text-blue-600 dark:text-white hover:underline"
              >
                Etsi urheilija
              </Link>{" "}
              |{" "}
              <Link
                to="/Lisays"
                className="text-blue-600 dark:text-white hover:underline"
              >
                Lisää urheilija
              </Link>{" "}
              |{" "}
              <Link
                to="/Paivitys"
                className="text-blue-600 dark:text-white hover:underline"
              >
                Päivitä urheilijaa
              </Link>{" "}
              |{" "}
              <Link
                to="/Poisto"
                className="text-blue-600 dark:text-white hover:underline"
              >
                Poista urheilija
              </Link>
            </nav>
            <div>
              {/* Routes */}
              <Routes>
                <Route path="/Haku" element={<Haku_lomake />} />
                <Route path="/Lisays" element={<Lisays_lomake />} />
                <Route path="/Paivitys" element={<Paivitys_lomake />} />
                <Route path="/Poisto" element={<Poisto_lomake />} />
              </Routes>
            </div>
          </div>
        </BrowserRouter>
      </GlobalState>
    </>
  );
}

export default App;
