import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const Offer = () => {
  const { id } = useParams();

  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        `https://lereacteur-vinted-api.herokuapp.com/offer/${id}`
      );
      setData(response.data);
      setIsLoading(false);
    };
    fetchData();
  }, [id]);
  return isLoading ? (
    <span>En cours de chargement...</span>
  ) : (
    <div className="annonce">
      <div className="annoncepic">
        <img
          style={{ height: 600, width: 400 }}
          alt={data.product_name}
          src={data.product_image.url}
        />
      </div>
      <div className="annonceresume">
        <span className="category" style={{ marginLeft: 20, marginTop: 20 }}>
          {data.product_price} €
        </span>
        {data.product_details.map((elem, index) => {
          const keys = Object.keys(elem);
          console.log(keys);
          return (
            <p style={{ marginLeft: 20 }} key={index}>
              {keys[0]} : {elem[keys[0]]}
            </p>
          );
        })}

        <span style={{ marginLeft: 20 }}>
          <hr style={{ marginRight: 20 }} />
          {data.product_name}
          <br />

          {data.product_description}
          <br />

          <img
            style={{ height: 50, width: 50, borderRadius: 25 }}
            alt={data.owner.account.username}
            src={data.owner.account.avatar.url}
          />

          {data.owner.account.username}
        </span>
        <br />

        <button style={{ marginLeft: 20 }}>Acheter</button>
      </div>
    </div>
  );
};

export default Offer;
