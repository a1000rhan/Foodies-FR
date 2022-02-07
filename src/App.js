import "./App.css";
import "./recipe.css";
import "./detail.css";
import { Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Detail from "./components/Detail";
import Recipes from "./components/Recipes";

function App() {
  return (
    <dic>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recipes" element={<Recipes />} />
        <Route path="/detail" element={<Detail />} />
      </Routes>
    </dic>
  );
}

export default App;
