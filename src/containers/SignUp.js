import React, { useState } from "react";
import axios from "axios";

const SignUp = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        "https://lereacteur-vinted-api.herokuapp.com/user/signup",
        { username: username, email: email, password: password }
      );
      console.log(response.data);
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <div>
      SignUp
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={username}
          onChange={(event) => {
            setUsername(event.target.value);
          }}
        />
        <br />
        <input
          type="email"
          value={email}
          onChange={(event) => {
            setEmail(event.target.value);
          }}
        />
        <input
          type="password"
          value={password}
          onChange={(event) => {
            setPassword(event.target.value);
          }}
        />
        <input type="submit" value="S'inscrire" />
      </form>
    </div>
  );
};
export default SignUp;
