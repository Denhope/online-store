import React from 'react';
import AdminPage from '../pages/AdminPage';
import AuthPage from '../pages/AuthPage';
import DevicePage from '../pages/DevicePage';
import BasketPage from '../pages/BasketPage';
import ShopPage from '../pages/ShopPage';

export interface IRoute {
  path: string;
  component: React.ComponentType;
  exact?: boolean;
}

export enum RouteNames {
  LOGIN_ROUTE = '/login',
  SHOP_ROUTE = '/',
  REGISTRATION_ROUTE = '/registration',
  BASKET_ROUTE = '/basket',
  DEVICE_ROUTE = '/device',
  ADMIN_ROUTE = '/admin',
}

export const publicRoutes = [
  {
    path: RouteNames.LOGIN_ROUTE,
    exact: true,
    component: AuthPage,
  },
  {
    path: RouteNames.REGISTRATION_ROUTE,
    exact: true,
    component: AuthPage,
  },
  {
    path: RouteNames.DEVICE_ROUTE + '/:id',
    exact: true,
    component: DevicePage,
  },
  {
    path: RouteNames.SHOP_ROUTE,
    exact: true,
    component: ShopPage,
  },
];

export const privateRoutes = [
  {
    path: RouteNames.ADMIN_ROUTE,
    exact: true,
    component: AdminPage,
  },
  {
    path: RouteNames.BASKET_ROUTE,
    exact: true,
    component: BasketPage,
  },
  {
    path: RouteNames.SHOP_ROUTE,
    exact: true,
    component: ShopPage,
  },
];
