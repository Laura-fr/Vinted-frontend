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

      {/* permet d'afficher le bouter se déconnecter et de cacher les S'inscrire et Se connecter */}

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
        </div>
      )}
      <div>
        <Link to="/Publish">
          <button>Vends tes articles</button>
        </Link>
      </div>
    </div>
  );
};

export default Header;
