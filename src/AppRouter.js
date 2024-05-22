import React from "react";
import { BrowserRouter as Router, Route, Switch, } from 'react-router-dom';
import App from './App';
import Prologue from "./pages/Prologue";

const AppRouter = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" component={App} />
        <Route path="/prologue" component={Prologue} />
      </Switch>
    </Router>
  );
};

export default AppRouter;