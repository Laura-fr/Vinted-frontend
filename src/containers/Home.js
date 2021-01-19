import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import pic from "../assets/img/boardpic.jpeg";
import axios from "axios";
import Loading from "../components/Loading";

const Home = () => {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const fetchData = async () => {
    const response = await axios.get(
      "https://vinted-express.herokuapp.com/offers"
    );
    console.log(response.data);
    setData(response.data);
    setIsLoading(false);
  };
  useEffect(() => {
    fetchData();
  }, []);
  return isLoading ? (
    <Loading />
  ) : (
    <div>
      <img alt="pic" src={pic} className="board-pic" />

      <div className="board">
        <p>Prêt à faire du tri dans vos placards ?</p>

        <Link to="/Publish">
          <button>Commencer à vendre</button>
        </Link>
      </div>
      <div className="presentation">
        {data.offers.map((offer, index) => {
          return (
            <div className="presentation2" key={index}>
              <span>
                {offer.owner.account.avatar && (
                  <img
                    style={{
                      height: 25,
                      width: 25,
                      borderRadius: 25,
                      marginRight: 10,
                    }}
                    alt={offer.owner.account.avatar.url}
                    src={offer.owner.account.avatar.url}
                  />
                )}
                {offer.owner.account.username}
              </span>

              <Link to={`/offer/${offer._id}`}>
                <img
                  className="main-home-pics"
                  alt={offer.product_image.url}
                  src={offer.product_image.url}
                />
              </Link>
              <span style={{ fontSize: 14, marginTop: 10 }}>
                {offer.product_price} €
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
