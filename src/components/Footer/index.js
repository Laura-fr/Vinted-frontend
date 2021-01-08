import React from "react";
import "./index.css";

const Footer = () => {
  return (
    <div className="footer">
      {" "}
      <p>
        Made with{" "}
        <a href="https://reactjs.org/" target="_blank" rel="noreferrer">
          React
        </a>{" "}
        at{" "}
        <a href="https://www.lereacteur.io/" target="_blank" rel="noreferrer">
          Le Reacteur
        </a>{" "}
        by{" "}
        <a href="https://github.com/Laura-fr" target="_blank" rel="noreferrer">
          Laura
        </a>
      </p>
    </div>
  );
};

export default Footer;
