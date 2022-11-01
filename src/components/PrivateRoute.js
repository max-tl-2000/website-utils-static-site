/*
 * Copyright (c) 2022 Reva Technology Inc., all rights reserved.
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Licensed under the Elastic License 2.0; you may not use this file except
 * in compliance with the Elastic License 2.0.
 */
// src/components/PrivateRoute.js

import React, { 
  // useEffect 
} from "react";
import { Route } from "react-router-dom";
// import { useAuth0 } from "../react-auth0-spa";

const PrivateRoute = ({ component: Component, path, ...rest }) => {
  // const { loading, isAuthenticated, loginWithRedirect } = useAuth0();

  // useEffect(() => {
  //   if (loading || isAuthenticated) {
  //     return;
  //   }
  //   const fn = async () => {
  //     await loginWithRedirect({
  //       appState: {targetUrl: window.location.pathname}
  //     });
  //   };
  //   fn();
  // }, [loading, isAuthenticated, loginWithRedirect, path]);

  // const render = props =>
  //   isAuthenticated === true ? <Component {...props} /> : null;

  const render = props => <Component {...props} />

  return <Route path={path} render={render} {...rest} />;
};

export default PrivateRoute;
