import React from "react";
import Slider from "./Slider";
import { Link } from "react-router-dom";
import { MdFoodBank } from "react-icons/md";

const Home = () => {
  return (
    <div className="bg-dark">
      <Slider />
      <div className="box">
        <div className="in-box">
          <h1>FOODIEZ</h1>
          <h4>Check Our Special Recpies, You're Gonna Die Happy</h4>
        </div>
        <Link to="/recipes">
          <button className="btn-menu">
            <MdFoodBank />
            &ensp; Recpie
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
