import React from "react";
import { useParams } from "react-router-dom";

const Offer = () => {
  const { id } = useParams();
  return <div>Offer {id}</div>;
};

export default Offer;
