import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import SearchBar from "./SearchBar";
import UserModal from "./UserModal";

const NavBar = () => {
  const [query, setQuery] = useState("");
  return (
    <div>
      <h3 className=" text-light logo">FOODIEZ</h3>
      <div className="navbar navbar-expand-lg navbar-dark trans-bg position-absolute top-0 end-0 px-5">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <NavLink to="/" className="text-decoration-none">
                <li className="nav-item">
                  <a className="nav-link ">Home</a>
                </li>
              </NavLink>
              <NavLink to="/menu" className="text-decoration-none">
                <li className="nav-item">
                  <a className="nav-link">Menu</a>
                </li>
              </NavLink>
              <NavLink to="/pricing" className="text-decoration-none">
                <li className="nav-item">
                  <a className="nav-link">Pricing</a>
                </li>
              </NavLink>

              <li className="nav-item">
                <UserModal />
              </li>
              <i>
                <SearchBar setQuery={setQuery} />
              </i>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
