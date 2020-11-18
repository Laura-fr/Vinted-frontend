import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

const SignUp = ({ setUser }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const history = useHistory();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        "https://lereacteur-vinted-api.herokuapp.com/user/signup",

        { username: username, email: email, password: password }
      );
      if (response.data.token) {
        setUser(response.data.token);
        history.push("/");
      } else {
        alert("une erreur est arrivée 😱");
      }
      // console.log(response.data);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="Signup">
      <h3>S'inscrire</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Nom d'utilisateur"
          value={username}
          onChange={(event) => {
            setUsername(event.target.value);
          }}
        />
        <br />
        <input
          type="email"
          placeholder="Adresse email"
          value={email}
          onChange={(event) => {
            setEmail(event.target.value);
          }}
        />
        <br />
        <input
          type="password"
          placeholder="Mot de passe"
          value={password}
          onChange={(event) => {
            setPassword(event.target.value);
          }}
        />
        <br />
        <input type="submit" value="S'inscrire" />
      </form>
    </div>
  );
};
export default SignUp;

// changer la redirection ici, après s'être connecté l'utilisateur doit retourner sur la page payment et non pas home.
