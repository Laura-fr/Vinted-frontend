import React, { useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import axios from "axios";

const Login = ({ setUser }) => {
  const history = useHistory();
  const location = useLocation();

  // let fromPublish;
  // if (location.state) {
  //   fromPublish = true;
  // } else {
  //   fromPublish = false;
  // }
  // differente écrite pour condtion from publish
  const fromPublish = location.state?.fromPublish ? true : false; //optional chaining

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        "https://vinted-express.herokuapp.com/user/login",
        {
          email: email,
          password: password,
        }
      );

      if (response.data.token) {
        setUser(response.data.token);

        history.push(fromPublish ? "/publish" : "/");
      } else {
        alert("Une erreur est survenue");
      }
    } catch (error) {
      console.log(error.response);
    }
  };
  return (
    <div className="login">
      <h3>Se connecter</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Adresse email"
          value={email}
          onChange={(event) => {
            setEmail(event.target.value);
          }}
        />

        <input
          type="password"
          placeholder="Mot de Passe"
          value={password}
          onChange={(event) => {
            setPassword(event.target.value);
          }}
        />

        <button type="submit">Se connecter</button>
      </form>
    </div>
  );
};

export default Login;
