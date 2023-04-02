import React, { FC } from 'react';
import { Route, Routes as Switch } from 'react-router-dom';

import RequiredAuthRoute from './RequiredAuthRoute';
import { ROUTES } from './router';

const Routes: FC = () => {
  return (
    <Switch>
      {ROUTES.map((route) => (
        <Route
          key={route.path}
          path={route.path}
          element={
            route.requireAuth ? (
              <RequiredAuthRoute>{route.component}</RequiredAuthRoute>
            ) : (
              route.component
            )
          }
        />
      ))}
    </Switch>
  );
};

export default Routes;
