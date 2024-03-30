import { mount } from "marketing/MarketingApp";
import { useHistory } from "react-router-dom";
import React, { useEffect, useRef } from "react";

export default () => {
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
    });

    history.listen(onParentNavigation);
  }, []);
  return <div ref={ref} />;
};
