import React from "react";

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
            <select name="catogories">
              <option></option>
            </select>
            <button className="btn-reg">+ Add Repise</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recipes;
