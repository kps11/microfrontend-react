import "./components/Dashboard.css";
import React from "react";
import { Switch, Route, Router } from "react-router-dom";
import {
  StylesProvider,
  createGenerateClassName,
} from "@material-ui/core/styles";
import Dashboard from "./components/Dashboard";

const generateClassName = createGenerateClassName({
  productionPrefix: "da",
});

function App({ history, successLogin }) {
  return (
    <div>
      <StylesProvider generateClassName={generateClassName}>
        <h2>Its your time to work on</h2>
        <Router history={history}>
          <Switch>
            <Route path="/">
              <Dashboard successLogin={successLogin} />
            </Route>
          </Switch>
        </Router>
      </StylesProvider>
    </div>
  );
}

export default App;
