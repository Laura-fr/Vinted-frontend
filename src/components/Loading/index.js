import React from "react";
import Loader from "react-loader-spinner";
import "./index.css";

const Loading = () => {
  return (
    <Loader
      className="loader"
      type="Rings"
      color="#38B2BB"
      height={500}
      width={500}
      timeout={5000} //5 seconds
    />
  );
};

export default Loading;
