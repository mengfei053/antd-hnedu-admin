import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import IndexPage from './routes/IndexPage';
import GroupIntro from './routes/SiderBar/GroupIntro/GroupIntro'
import ProductServer from './routes/SiderBar/ProductServer/ProductServer'

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={IndexPage} />
        <Route path="/groupintro" exact component={GroupIntro}/>
        <Route path="/product/:name" exact component={ProductServer}/>
      </Switch>
    </Router>
  );
}

export default RouterConfig;
