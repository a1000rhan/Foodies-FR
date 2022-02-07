import React from "react";
import CategoryModal from "./CategoryModal";
import RecipeModal from "./RecipeModal";

const Recipes = () => {
  // const catogory = Catogory.map((e) => e);
  return (
    <div>
      <div className="header-dark">
        <div className="header-menu">
          <h1 className="zindex-popover">R E C I P E S </h1>
        </div>
      </div>
      <div className="in-body-menu">
        <div>
          <div className="tools">
            <h4 className="cat">Categories</h4>
            <select name="categories" className="checklist" id="categories">
              <option value="lunch">Lunch</option>
              <option value="breakfast">Breakfast</option>
            </select>
            <RecipeModal />
            <CategoryModal />
          </div>
          <div className="posts">
            {/* card */}
            <div className="post">
              <div className="img-post">
                <img
                  className="img-size"
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
                  className="img-size"
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
                  className="img-size"
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
                  className="img-size"
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
                  className="img-size"
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
                  className="img-size"
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
                  className="img-size"
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
