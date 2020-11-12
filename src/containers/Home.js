import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import pic from "../assets/img/boardpic.jpeg";
import axios from "axios";

const Home = () => {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const fetchData = async () => {
    const response = await axios.get(
      "https://lereacteur-vinted-api.herokuapp.com/offers"
    );
    setData(response.data);
    setIsLoading(false);
  };
  useEffect(() => {
    console.log("rentre dans le use effect !!!");
    fetchData();
  }, []);
  return isLoading ? (
    <span>En cours de chargement...</span>
  ) : (
    <div>
      <img style={{ height: 455, width: "100%" }} alt="pic" src={pic} />

      <div className="board">
        <p>Prêt à faire du tri dans vos placards ?</p>
        <Link to="/offer/:id">
          <button>Commencer à vendre</button>
        </Link>
      </div>
      <div className="offer">
        <h3>{data.product_name}</h3>
      </div>
    </div>
  );
};

export default Home;
