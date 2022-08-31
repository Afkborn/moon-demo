import React from "react";
import { Route, Switch } from "react-router-dom";
import { Container } from "reactstrap";
import Navi from "../Navi/Navi";
import Dashboard from "./Dashboard";
import Basket from "../Basket/Basket";

import Account from "../Account/Account";

function App() {
  return (
    <Container>
      <Navi></Navi>
      <Switch>
        <Route path="/" exact component={Dashboard} />
        <Route path="/basket"  component={Basket} />
        <Route path="/account" component={Account} />
      </Switch>
    </Container>
  );
}

export default App;
