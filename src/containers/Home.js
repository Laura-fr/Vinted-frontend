import React from "react";
import { Link } from "react-router-dom";
import pic from "../assets/img/boardpic.jpeg";

const Home = ({ data }) => {
  return (
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
