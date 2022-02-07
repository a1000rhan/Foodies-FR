import "./App.css";
import "./menu.css";
import "./price.css";
import { Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Menu from "./components/Menu";
import Priceing from "./components/Pricing";

function App() {
  return (
    <dic>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/pricing" element={<Priceing />} />
      </Routes>
    </dic>
  );
}

export default App;
