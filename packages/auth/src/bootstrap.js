import React from "react";
import ReactDOM from "react-dom";
import { createMemoryHistory, createBrowserHistory } from "history";
import App from "./App";

//Mount function to start up the app
const mount = (
  el,
  {
    onNavigate,
    defaultHistory,
    initialPath,
    onSignIn,
    isSuccessLogin,
    successLogin,
  }
) => {
  console.log(initialPath); // eslint-disable-line
  const history =
    defaultHistory ||
    createMemoryHistory({
      initialEntries: [initialPath],
    });

  onNavigate && history.listen(onNavigate);

  //Rendering the main component
  ReactDOM.render(
    <App
      history={history}
      onSignIn={onSignIn}
      isSuccessLogin={isSuccessLogin}
      successLogin={successLogin}
    />,
    el
  );

  return {
    onParentNavigation: ({ pathname: nextPathName }) => {
      const { pathname } = history.location;
      if (pathname !== nextPathName) {
        history.push(nextPathName);
      }
    },
  };
};

// if we are in development and isolation call mount immediately
if (process.env.NODE_ENV === "development") {
  const devRoot = document.querySelector("#auth-dev-root");

  if (devRoot) {
    mount(devRoot, { defaultHistory: createBrowserHistory() });
  }
}

//we are runnning through the container and we should export the mount function

export { mount };
