import React from "react";
import { Link } from "react-router-dom";
import Categorie from "../Categories";
import RecipeModal from "./RecipeModal";

const Recipes = () => {
  const cat = Categorie.map((ca) => <option>{ca.name}</option>);
  return (
    <div>
      <h1 className="title-page">R E C I P E S </h1>
      <div className="header-dark">
        <div className="header-menu"></div>
      </div>
      <div className="in-body-menu">
        <div>
          <div className="tools">
            <h4 className="cat">Categories</h4>
            <select name="categories" className="checklist" id="categories">
              {cat}
            </select>
            <RecipeModal />
          </div>
          <div className="posts">
            {/* card */}
            <div className="post">
              <Link to="/detail">
                <div className="img-post">
                  <img
                    className="img-size-recipe"
                    src="https://st.depositphotos.com/1900347/4146/i/600/depositphotos_41466555-stock-photo-image-of-slice-of-pizza.jpg"
                    alt=""
                  />
                </div>
              </Link>
              <h3 className="m-2">Neapolitan-style pizza with Lisa</h3>
              <div className="owner">
                <img
                  className="avator"
                  src="https://upload.wikimedia.org/wikipedia/commons/a/a0/Pierre-Person.jpg"
                  alt="owner"
                />
                <h6>Mohammad Alhamdan</h6>
              </div>
            </div>
            {/* card */}
            <div className="post">
              <div className="img-post">
                <img
                  className="img-size-recipe"
                  src="https://st.depositphotos.com/1900347/4146/i/600/depositphotos_41466555-stock-photo-image-of-slice-of-pizza.jpg"
                  alt=""
                />
              </div>
              <h3 className="m-2">Neapolitan-style pizza with Lisa</h3>
              <div className="owner">
                <img
                  className="avator"
                  src="https://upload.wikimedia.org/wikipedia/commons/a/a0/Pierre-Person.jpg"
                  alt="owner"
                />
                <h6>Mohammad Alhamdan</h6>
              </div>
            </div>
            {/* card */}
            <div className="post">
              <div className="img-post">
                <img
                  className="img-size-recipe"
                  src="https://st.depositphotos.com/1900347/4146/i/600/depositphotos_41466555-stock-photo-image-of-slice-of-pizza.jpg"
                  alt=""
                />
              </div>
              <h3 className="m-2">Neapolitan-style pizza with Lisa</h3>
              <div className="owner">
                <img
                  className="avator"
                  src="https://upload.wikimedia.org/wikipedia/commons/a/a0/Pierre-Person.jpg"
                  alt="owner"
                />
                <h6>Mohammad Alhamdan</h6>
              </div>
            </div>
            {/* card */}
            <div className="post">
              <div className="img-post">
                <img
                  className="img-size-recipe"
                  src="https://st.depositphotos.com/1900347/4146/i/600/depositphotos_41466555-stock-photo-image-of-slice-of-pizza.jpg"
                  alt=""
                />
              </div>
              <h3 className="m-2">Neapolitan-style pizza with Lisa</h3>
              <div className="owner">
                <img
                  className="avator"
                  src="https://upload.wikimedia.org/wikipedia/commons/a/a0/Pierre-Person.jpg"
                  alt="owner"
                />
                <h6>Mohammad Alhamdan</h6>
              </div>
            </div>

            {/* card */}
            <div className="post">
              <div className="img-post">
                <img
                  className="img-size-recipe"
                  src="https://st.depositphotos.com/1900347/4146/i/600/depositphotos_41466555-stock-photo-image-of-slice-of-pizza.jpg"
                  alt=""
                />
              </div>
              <h3 className="m-2">Neapolitan-style pizza with Lisa</h3>
              <div className="owner">
                <img
                  className="avator"
                  src="https://upload.wikimedia.org/wikipedia/commons/a/a0/Pierre-Person.jpg"
                  alt="owner"
                />
                <h6>Mohammad Alhamdan</h6>
              </div>
            </div>
            {/* card */}
            <div className="post">
              <div className="img-post">
                <img
                  className="img-size-recipe"
                  src="https://st.depositphotos.com/1900347/4146/i/600/depositphotos_41466555-stock-photo-image-of-slice-of-pizza.jpg"
                  alt=""
                />
              </div>
              <h3 className="m-2">Neapolitan-style pizza with Lisa</h3>
              <div className="owner">
                <img
                  className="avator"
                  src="https://upload.wikimedia.org/wikipedia/commons/a/a0/Pierre-Person.jpg"
                  alt="owner"
                />
                <h6>Mohammad Alhamdan</h6>
              </div>
            </div>
            {/* card */}
            <div className="post">
              <div className="img-post">
                <img
                  className="img-size-recipe"
                  src="https://st.depositphotos.com/1900347/4146/i/600/depositphotos_41466555-stock-photo-image-of-slice-of-pizza.jpg"
                  alt=""
                />
              </div>
              <h3 className="m-2">Neapolitan-style pizza with Lisa</h3>
              <div className="owner">
                <img
                  className="avator"
                  src="https://upload.wikimedia.org/wikipedia/commons/a/a0/Pierre-Person.jpg"
                  alt="owner"
                />
                <h6>Mohammad Alhamdan</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recipes;
