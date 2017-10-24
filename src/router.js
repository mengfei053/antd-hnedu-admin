import React from 'react';
import { Router, Route, Switch ,Redirect } from 'dva/router';
import IndexPage from './routes/IndexPage';
import dynamic from 'dva/dynamic'



function RouterConfig({ history , app }) {

  const routes = [
    {
      path:'/dashboard',
      component:()=>import('./components/Pages/Dashboard/Dashboard')
    }, {
      path:'/content',
      component:()=>import('./components/Pages/Content/Content')
    }, {
      path:'/column',
      component:()=>import('./components/Pages/Column/Column')
    },

  ]


  return (
    <Router history={history}>
      <Switch>
        <Route exact path="/" render={() => (<Redirect to="/dashboard" />)}/>
        {
          /*<Route path="/" exact component={IndexPage} />*/
          routes.map(function (item,key) {
            <Route
              key={key}
              exact
              path={item.path}
              component={dynamic({
                app,

              })}
            />
          })

        }


      </Switch>
    </Router>
  );
}

export default RouterConfig;
