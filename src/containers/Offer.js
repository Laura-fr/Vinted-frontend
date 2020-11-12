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
    <div>
      <p>{data.product_name}</p>
      <img alt={data.product_name} scr={data.product_image.url} />
      {data.product_details.map((elem, index) => {
        const keys = Object.keys(elem);
        console.log(keys);
        return (
          <p key={index}>
            {keys[0]} {elem[keys[0]]}
          </p>
        );
      })}
    </div>
  );
};

export default Offer;
