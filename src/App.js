/*
 * Copyright (c) 2022 Reva Technology Inc., all rights reserved.
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Licensed under the Elastic License 2.0; you may not use this file except
 * in compliance with the Elastic License 2.0.
 */
import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  // useLocation,
  // useParams,
  // useRouteMatch
} from "react-router-dom";
import NavBar from "./components/NavBar";
import Header from './components/Header';
import Subheader from './components/Subheader/Subheader';
import Landing from './pages/Landing';
import Property from './pages/Property';
import About from './pages/About';
import Footer from './components/Footer';
// import { useAuth0 } from "./react-auth0-spa";
import history from "./utils/history";
import PrivateRoute from "./components/PrivateRoute";
import Community from './pages/Communities';

const isMainView = () => {
  return history.location.pathname === '/'
}

function App(props) {
  
  // Set up ref's needed for component
  // const relatedProperties = useRef(null)

  // const slug = 'minnesota/minneapolis-metro/colonial-villa-apartments';
  // window.Reva.stores.getWebSiteStore().setPropertyFromSlug(slug);

  // const { isAuthenticated, loginWithRedirect, login, logout, loading } = useAuth0();

  // console.log(isAuthenticated)

  // useEffect(() => {
  //   window.Reva.ui.createRelatedPropertiesWidget(relatedProperties.current);
  // }, [relatedProperties]);
  
  return (
    <div className="contentWrapperHome">
      {/* <Header /> */}
      {/* <div ref={relatedProperties}></div> */}
      <Router history={history}>
        {isMainView() && <Header />}
        {!isMainView() && <Subheader />}
        <div>
          {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
          <Switch>
            <PrivateRoute path="/about">
              <About />
            </PrivateRoute>
            <Route path={["/community/city/:city", "/communities"]}>
              <Community />
            </Route>
            <Route path="/property/:state/:city/:property">
              <Property />
            </Route>
            <Route path="/">
              <Landing />
            </Route>
          </Switch>
        </div>

        <NavBar />
        <Footer />
      </Router>
    </div>
  );
}

export default App
