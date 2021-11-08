import React from "react";
import logo from "../media/smiling-luffy-face.png";
import UserButtons from "./UserButtons";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const NavBar = (props) => {
  //props: hasSignedIn, setHasSignedIn, email, setEmail, password, setPassword

  return (
    <nav className=" navbar navbar-expand-md navbar-dark fixed-top">
      <div className="funFont align-items-center justify-content-start pt-3 container ">
        <div className="navbar-brand d-flex justify-content-end">
          <img src={logo} alt="logo" />
          <span id="main-title-text">My Anime List</span>
        </div>
        <button
          className="navbar-toggler "
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="true"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse mt-3 "
          id="navbarSupportedContent"
        >
          <div className="d-flex align-items-center" id="collapsible-elements">
            <Link to="/discover">
              <button
                type="button"
                id="discover-btn"
                className="nav-btn "
              ></button>
            </Link>
            <Link to="/search">
              <button
                type="button"
                id="search-btn"
                className="nav-btn"
              ></button>
            </Link>
            <Link to="/my-anime-list">
              <button
                type="button"
                id="my-anime-list-btn"
                className="nav-btn nav-btn-right"
              ></button>
            </Link>
            <UserButtons
              hasSignedIn={props.hasSignedIn}
              setHasSignedIn={props.setHasSignedIn}
              email={props.email}
              setEmail={props.setEmail}
              password={props.password}
              setPassword={props.setPassword}
            />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
