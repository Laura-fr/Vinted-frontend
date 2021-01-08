import React, { useState } from "react";
import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";
import axios from "axios";
import "./index.css";

const Checkpay = ({ title, price }) => {
  const [completed, setCompleted] = useState(false);

  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event) => {
    event.preventDefault();
    // stripe récupère données bancaires
    const cardElement = elements.getElement(CardElement);

    // requête qui envoie données api stripe
    const stripeResponse = await stripe.createToken(cardElement, {
      name: "23312JJKJ3223",
    });

    const stripeToken = stripeResponse.token.id;

    // requête à mon serveur
    const response = await axios.post(
      "https://vinted-express.herokuapp.com/payment",
      {
        token: stripeToken,
        title: title,
        amount: price,
      }
    );
    console.log(response.data);
    if (response.data.status === "succeeded") {
      setCompleted(true);
    } else {
      alert("Something happenened, try again");
    }
  };
  return (
    <div>
      {completed ? (
        <p>Paiement effectué !</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <CardElement />
          <button type="submit">Acheter</button>
        </form>
      )}
    </div>
  );
};

export default Checkpay;
