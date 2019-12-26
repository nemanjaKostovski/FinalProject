import React from 'react';
import { routes } from './routes';
import { 
  Route,
  Switch,
} from 'react-router-dom';

export default () => (
  console.log("about to switch") ||
  <Switch>
    {routes.map((route, index) => (
      <Route 
        exact={route.exact}
        key={index}
        path={route.path}
        component={route.component}
      />
    ))}
  </Switch>
);