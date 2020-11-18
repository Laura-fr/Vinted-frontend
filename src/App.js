import React, { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./containers/Home";
import Offer from "./containers/Offer";
import Header from "./components/Header";
import SignUp from "./containers/SignUp";
import Login from "./containers/Login";
import Publish from "./containers/Publish";
import Payment from "./containers/Payment";
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
            <Publish token={token} />
          </Route>
          <Route path="/payment">
            <Payment token={token} />
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

// - Faire  la page payment au complet
// - Finir CSS offer et payment
// - Régler problème de redirection (payment)
// - Détails CSS : Icone chargement de la page, importer font vinted, importer le plus de détails possible du site...
// - Bien intégrer la confirmation de commande (modale ?)
// - Confirmation par mail ?
