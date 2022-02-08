import React from "react";
import { Link } from "react-router-dom";
import authstore from "../store/authStore";

const RecipeItem = ({ recipe }) => {
  console.log(authstore.user);

  return (
    <div>
      <div className="post">
        <div className="img-post">
          <Link to={`/${recipe.slug}`}>
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
          <h6 className="owner-name">{recipe.owner.username}</h6>
          {console.log(
            "🚀 ~ file: RecipeItem.js ~ line 24 ~ RecipeItem ~ recipe.owner",
            recipe.owner
          )}
        </div>
      </div>
    </div>
  );
};

export default RecipeItem;
