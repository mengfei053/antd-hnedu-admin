import React from 'react';
import PropTypes from 'prop-types'
import { Router, Route, Switch ,Redirect, routerRedux } from 'dva/router';
import IndexPage from './routes/IndexPage';
import dynamic from 'dva/dynamic'

const { ConnectedRouter } = routerRedux



function RouterConfig({ history , app }) {

  const routes = [
    {
      path:'/dashboard',
      models:()=>[import('./models/dashboard')],
      component:()=>import('./routes/Pages/Dashboard/Dashboard'),
    },
    {
      path:'/content',
      models:()=>[import('./models/contents')],
      component:()=>import('./routes/Pages/Contents/Contents'),
    },{
      path:'/column',
      models:()=>[import('./models/column')],
      component:()=>import('./routes/Pages/Column/Column'),
    },{
      path:'/maintain',
      models:()=>[import('./models/maintain')],
      component:()=>import('./routes/Pages/Maintain/Maintain'),
    },{
      path:'/userpages',
      // models:()=>[import('./models/userpages')],
      component:()=>import('./routes/Pages/UserPages/UserPages'),
    },{
      path:'/expansion',
      // models:()=>[import('./models/expansion')],
      component:()=>import('./routes/Pages/Expansion/Expansion'),
    },{
      path:'/datacenter',
      // models:()=>[import('./models/datacenter')],
      component:()=>import('./routes/Pages/DataCenter/DataCenter'),
    },{
      path:'/teplpages',
      // models:()=>[import('./models/teplpages')],
      component:()=>import('./routes/Pages/TeplPages/TeplPages'),
    },{
      path:'/resources',
      // models:()=>[import('./models/resources')],
      component:()=>import('./routes/Pages/Resources/Resources'),
    },{
      path:'/configpages',
      // models:()=>[import('./models/configpages')],
      component:()=>import('./routes/Pages/ConfigPages/ConfigPages'),
    },
  ]


  return (
    <ConnectedRouter history={history}>
      <IndexPage>
        <Switch>
          <Route exact path="/" render={() => (<Redirect to="/dashboard" />)}/>
          {
            routes.map(({path,...dynamics},key)=>(
              <Route
                key={key}
                exact
                path={path}
                component={dynamic({
                  app,
                  ...dynamics
                })}
              />
            ))
          }
        </Switch>
      </IndexPage>
    </ConnectedRouter>
  );
}

RouterConfig.propTypes = {
  history: PropTypes.object,
  app: PropTypes.object,
}


export default RouterConfig;
