import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

import Loading from "../components/Loading";

import avatar from "../assets/img/avatar.png";

const Offer = () => {
  const { id } = useParams();

  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        `https://vinted-express.herokuapp.com/offer/${id}`
      );
      setData(response.data);
      setIsLoading(false);
    };
    fetchData();
  }, [id]);
  return isLoading ? (
    <Loading />
  ) : (
    <div className="offer-page">
      <div className="offer-container">
        <div className="offer-pic">
          <img alt={data.product_name} src={data.product_image.url} />
        </div>
        <div className="offer-resume">
          <div className="offer-resume-part1">
            <h2>{data.product_price} €</h2>
            {data.product_details.map((elem, index) => {
              const keys = Object.keys(elem);
              console.log(keys);
              return (
                <div className="info" key={index}>
                  <p className="info1">{keys[0]} : </p>
                  <p className="info2">{elem[keys[0]]}</p>
                </div>
              );
            })}
          </div>

          <div className="offer-resume-part2">
            <h3>{data.product_name}</h3>

            <span>{data.product_description}</span>

            <div>
              {/* {data.owner.account.avatar && (
              <img
                style={{ height: 50, width: 50, borderRadius: 25 }}
                alt={data.owner.account.avatar.url}
                src={data.owner.account.avatar.url}
              />
            )} Dans le cas : image profile user  */}
            </div>
            <div className="user-info">
              <img src={avatar} alt="avatar" />

              <p>{data.owner.account.username}</p>
            </div>
          </div>
          <div className="offer-button">
            <Link
              to={{
                pathname: "/payment",
                state: { price: data.product_price, title: data.product_name },
              }}
            >
              <button>Acheter</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Offer;
