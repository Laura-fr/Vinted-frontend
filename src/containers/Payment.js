import React from "react";
import { Redirect, useLocation } from "react-router-dom";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

import Checkpay from "../components/Checkpay";

const stripePromise = loadStripe("pk_test_5z9rSB8XwuAOihoBixCMfL6X");

const Payment = ({ token }) => {
  const location = useLocation();
  const { price } = location.state;

  return token ? (
    <div className="pay">
      <p>Résumé de la commande</p>
      <div>Prix du produit : {price}</div>
      <Elements stripe={stripePromise} />
      <Checkpay price={price} />
    </div>
  ) : (
    <Redirect to={{ pathname: "/login", state: { fromPublish: true } }} />
  );
};

export default Payment;

// changer la redirection, après s'être connecté l'utilisateur doit retourner sur la page payment et non pas home.
