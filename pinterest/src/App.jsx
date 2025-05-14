import "./assets/css/style.css";
import Header from "./components/Header";
import Favorites from "./pages/Favorites";
import {Routes, Route} from "react-router-dom";
import Pins from "./pages/Pins";
import { ThemeProvider } from "./contexts/ThemeContext";
import { lightTheme } from "./styles/theme";
import { useState } from "react";

function App() {
  const [searchTerm, setSeachTerm] = useState("");

  function handleSearch(event) {
    setSeachTerm(event.target.value);
  }

  return (
    <>
    <ThemeProvider theme={lightTheme}>
      <Header onSearchChange={handleSearch} />
      <main>
        <Routes>
          <Route path="/" element={<Pins searchTerm={searchTerm} />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </main>
      </ThemeProvider>
    </>
  );
}

export default App;
