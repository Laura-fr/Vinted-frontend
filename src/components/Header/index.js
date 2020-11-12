import React from "react";
import { Link } from "react-router-dom";

import "./index.css";

const Header = () => {
  return (
    <div className="header">
      <Link to="/">
        <img alt="Peugeot 508" src="/logovinted.png" />
      </Link>
      <input type="text" placeholder="Recherche des articles"></input>
      <Link to="/signup">
        <button>S'inscrire</button>
      </Link>
      <Link to="/login">
        <button>Se connecter</button>
      </Link>
      <button>Vends tes articles</button>
    </div>
  );
};

export default Header;
