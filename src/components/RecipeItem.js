import React from "react";
import { Link } from "react-router-dom";
import authstore from "../store/authStore";

import { observer } from "mobx-react-lite";

const RecipeItem = ({ recipe }) => {
  return (
    <div>
      <div className="post">
        <div className="img-post">
          <Link to={`/recipes/${recipe.slug}`}>
            <img className="img-size-recipe" src={recipe.image} alt="" />
          </Link>
        </div>
        <h3 className="m-2">{recipe.title}</h3>
        <div className="owner">
          <img
            className="avator"
            src="https://upload.wikimedia.org/wikipedia/commons/a/a0/Pierre-Person.jpg"
            alt="owner"
          />
          <h6 className="owner-name">{recipe.owner?.username}</h6>
        </div>
      </div>
    </div>
  );
};

export default observer(RecipeItem);
