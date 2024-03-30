import React, { lazy, Suspense, useState, useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import {
  StylesProvider,
  createGenerateClassName,
} from "@material-ui/core/styles";
import Header from "./components/Header";
import Progress from "./components/Progress";

const MarketingLazy = lazy(() => import("./components/MarketingApp"));
const AuthLazy = lazy(() => import("./components/AuthApp"));
const DashboardLazy = lazy(() => import("./components/DashboardApp"));

const generateClassName = createGenerateClassName({
  productionPrefix: "co",
});
function App() {
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [successLogin, setIsSuccessLogin] = useState(false);
  return (
    <BrowserRouter>
      <StylesProvider generateClassName={generateClassName}>
        <div>
          <Header
            isSignedIn={isSignedIn}
            onSignOut={() => setIsSignedIn(false)}
          />
          <Suspense fallback={<Progress />}>
            <Switch>
              <Route exact path="/" component={MarketingLazy} />
              <Route path="/auth">
                <AuthLazy
                  onSignIn={() => setIsSignedIn(true)}
                  isSuccessLogin={() => setIsSuccessLogin(true)}
                  successLogin={successLogin}
                />
              </Route>
              <Route path="/dashboard">
                <DashboardLazy successLogin={successLogin} />
              </Route>
            </Switch>
          </Suspense>
        </div>
      </StylesProvider>
    </BrowserRouter>
  );
}

export default App;
