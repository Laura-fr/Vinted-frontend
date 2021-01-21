import React from "react";
import { Redirect, useLocation } from "react-router-dom";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import Checkpay from "../components/Checkpay";

const stripePromise = loadStripe(
  "pk_test_51I6ZamJNrRZfZkKjH4ZIN55c5F0LbVUUWUx6ufNJHiRTBLQmmc1JFjzmX4vCEPfRKWLtw47eAnGunVr9xS6rhghL00bNRrAd2B"
);

const Payment = ({ token }) => {
  const location = useLocation();
  const { price, title } = location.state;

  return token ? (
    <div className="payment-page">
      <div className="payment">
        <div className="order-resume">
          <p style={{ fontSize: 15, color: "#B5B5B5" }}>
            Résumé de la commande
          </p>
          <div className="order">
            <p>Commande</p>
            <p>{price} €</p>
          </div>
        </div>
        <div className="total-resume">
          <div className="total">
            <p>Total</p> <p>{price} €</p>
          </div>
          <div className="total-info">
            <span>
              Il ne vous reste plus qu'une étape pour vous offrir{" "}
              <span style={{ fontWeight: "bold" }}>{title}</span>. Vous allez
              payer <span style={{ fontWeight: "bold" }}>{price} euros</span>.
              (frais de protection et frais de port inclus).
            </span>
          </div>
        </div>

        <Elements stripe={stripePromise}>
          <Checkpay price={price} title={title} />
        </Elements>
      </div>
    </div>
  ) : (
    <Redirect to={{ pathname: "/login" }} />
  );
};

export default Payment;
