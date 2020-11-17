import React from "react";
import { Redirect, useLocation } from "react-router-dom";
import axios from "axios";

const Payment = ({ token }) => {
  const location = useLocation();
  const { title } = location.state;
  return token ? (
    <div>
      <p>Résumé de la commande</p>
      <span>{title}</span>
    </div>
  ) : (
    <Redirect to={{ pathname: "/login", state: { fromPublish: true } }} />
  );
};

export default Payment;
