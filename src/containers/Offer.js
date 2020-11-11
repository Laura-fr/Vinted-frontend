import React from "react";
import { useParams, Link } from "react-router-dom";

const Offer = () => {
  const { id } = useParams();
  return (
    <div>
      <p>Offer {id}</p>
      <Link to="/">Aller sur la page d'accueil</Link>
    </div>
  );
};

export default Offer;
