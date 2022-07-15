import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { Switch, Route, Redirect, Router } from 'react-router-dom';
import AdminPage from '../pages/AdminPage';
import BasketPage from '../pages/BasketPage';
import ShopPage from '../pages/ShopPage';
import { privateRoutes, publicRoutes, RouteNames } from '../router';
// import { useTypedSelector } from '../hooks/useTypedSelector';

const AppRouter = () => {
  const isAuth = true;

  return isAuth ? (
    <Switch>
      {privateRoutes.map((route) => (
        <Route path={route.path} exact={route.exact} component={route.component} key={route.path} />
      ))}
      <Redirect to={RouteNames.SHOP_ROUTE} />
    </Switch>
  ) : (
    <Switch>
      {publicRoutes.map((route) => (
        <Route path={route.path} exact={route.exact} component={route.component} key={route.path} />
      ))}
      <Redirect to={RouteNames.SHOP_ROUTE} />
    </Switch>
  );
};

export default AppRouter;
