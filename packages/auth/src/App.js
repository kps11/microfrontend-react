import React from "react";
import { Switch, Route, Router } from "react-router-dom";
import {
  StylesProvider,
  createGenerateClassName,
} from "@material-ui/core/styles";

import SignIn from "./components/Signin";
import SignUp from "./components/Signup";

const generateClassName = createGenerateClassName({
  productionPrefix: "au",
});

function App({ history, onSignIn, isSuccessLogin, successLogin }) {
  return (
    <div>
      <StylesProvider generateClassName={generateClassName}>
        <Router history={history}>
          <Switch>
            <Route path="/auth/signin">
              <SignIn
                onSignIn={onSignIn}
                successLogin={successLogin}
                isSuccessLogin={isSuccessLogin}
              />
            </Route>
            <Route path="/auth/signup">
              <SignUp onSignIn={onSignIn} successLogin={successLogin} />
            </Route>
          </Switch>
        </Router>
      </StylesProvider>
    </div>
  );
}

export default App;
