import React from "react";
import { Link } from "react-router-dom";

import "./index.css";

const Header = ({ token, setUser }) => {
  return (
    <div className="header">
      <Link to="/">
        <img alt="logo" src="/logovinted.png" />
      </Link>
      <input type="text" placeholder="  Recherche des articles"></input>
      {token ? (
        <button
          onClick={() => {
            setUser(null);
          }}
        >
          Se déconnecter
        </button>
      ) : (
        <div>
          <Link to="/signup">
            <button>S'inscrire</button>
          </Link>
          <Link to="/login">
            <button>Se connecter</button>
          </Link>
          <Link to="/Publish">
            <button>Vends tes articles</button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Header;
