import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <p>Home</p>
      <Link to="/offer/:id">Aller sur la page des offres</Link>
    </div>
  );
};

export default Home;
