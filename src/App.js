import React, { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./containers/Home";
import Offer from "./containers/Offer";
import Header from "./components/Header";
import SignUp from "./containers/SignUp";
import Login from "./containers/Login";
import Publish from "./containers/Publish";
import Cookie from "js-cookie";

function App() {
  const [token, setToken] = useState(Cookie.get("userToken") || null);
  const setUser = (tokenToSet) => {
    if (tokenToSet) {
      Cookie.set("userToken", tokenToSet);
      setToken(tokenToSet);
    } else {
      Cookie.remove("userToken");
      setToken(null);
    }
  };
  return (
    <div>
      <Router>
        <Header token={token} setUser={setUser} />
        <Switch>
          <Route path="/signup">
            <SignUp setUser={setUser} />
          </Route>
          <Route path="/login">
            <Login setUser={setUser} />
          </Route>
          <Route path="/offer/:id">
            <Offer />
          </Route>
          <Route path="/publish">
            <Publish />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
