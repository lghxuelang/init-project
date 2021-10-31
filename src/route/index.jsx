import React from "react";
import { HashRouter, Route, Switch, Redirect } from "react-router-dom";
import Layout from "../layout";
import Home from "../components/home";
import User from "../components/user";
import ErrPage from "../404";

const BasicRoute = () => (
  <HashRouter>
    <Switch>
      <Route
        path="/"
        component={() => {
          return (
            <Layout>
              <Switch>
                <Route exact path="/home" component={Home} />
                <Route exact path="/user/list" component={User} />
                <Route exact component={ErrPage} />
              </Switch>
            </Layout>
          );
        }}
      />
    </Switch>
    <Redirect from="/" to="/home" />
  </HashRouter>
);

export default BasicRoute;
