import React from "react";

const RecpieItem = ({ recpie }) => {
  return (
    <div>
      <div className="post">
        <div className="img-post">
          <img className="img-size-recipe" src={recpie.image} alt="" />
        </div>
        <h3 className="m-2">{recpie.title}</h3>
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
  );
};

export default RecpieItem;
