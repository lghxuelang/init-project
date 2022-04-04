import React from "react";
import { HashRouter, Route, Switch, Redirect } from "react-router-dom";
import {ConfigProvider} from 'antd';
import zhCN from 'antd/lib/locale/zh_CN';

import Layout from "../layout";
import Home from "../components/home";
import User from "../components/user";
import ErrPage from "../404";

const BasicRoute = () => (
  <ConfigProvider locale={zhCN}>
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
  </ConfigProvider>
);

export default BasicRoute;
