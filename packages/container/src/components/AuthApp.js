import { mount } from "auth/AuthApp";
import { useHistory } from "react-router-dom";
import React, { useEffect, useRef } from "react";

export default ({ onSignIn, isSuccessLogin, successLogin }) => {
  const ref = useRef(null);
  const history = useHistory();
  useEffect(() => {
    const { onParentNavigation } = mount(ref.current, {
      initialPath: history.location.pathname,
      onNavigate: ({ pathname: nextPathName }) => {
        const { pathname } = history.location;
        if (pathname !== nextPathName) {
          history.push(nextPathName);
        }
      },
      onSignIn: () => {
        onSignIn();
      },
      isSuccessLogin: () => {
        isSuccessLogin();
      },
      successLogin: successLogin,
    });

    history.listen(onParentNavigation);
  }, [successLogin]);
  return <div ref={ref} />;
};
