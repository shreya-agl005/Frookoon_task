import React from "react";
import "../App.css";
import logo from "../assets/logo.jpeg";

const Header = () => {
  return (
    <header className="header">
      <div className="logo-container">
        <img src={logo} alt="Frookoon Logo" className="logo" />
        <h2>Frookoon</h2>
      </div>

      <nav className="nav">
        <a href="#">Home</a>
        <a href="#">Stores</a>
        <a href="#">About</a>
        <a href="#">Contact</a>
      </nav>
    </header>
  );
};

export default Header;

