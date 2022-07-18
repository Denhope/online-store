import React from 'react';
import AdminPage from '../pages/AdminPage';
import AuthPage from '../pages/AuthPage';
import DevicePage from '../pages/DevicePage';
import BasketPage from '../pages/BasketPage';
import ShopPage from '../pages/ShopPage';
import HomePage from '../pages/HomePage';
import AboutPage from '../pages/AboutPage';

export interface IRoute {
  path: string;
  component: React.ComponentType;
  exact?: boolean;
}

export enum RouteNames {
  LOGIN_ROUTE = '/login',
  SHOP_ROUTE = '/products',
  REGISTRATION_ROUTE = '/registration',
  BASKET_ROUTE = '/basket',
  DEVICE_ROUTE = '/device',
  ADMIN_ROUTE = '/admin',
  HOME_ROUTE = '/',
  ABOUT_ROUTE = '/about',
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
  {
    path: RouteNames.ABOUT_ROUTE,
    exact: true,
    component: AboutPage,
  },
  {
    path: RouteNames.HOME_ROUTE,
    exact: true,
    component: HomePage,
  },
];

export const privateRoutes = [
  {
    path: RouteNames.ADMIN_ROUTE,
    exact: true,
    component: AdminPage,
  },
  {
    path: RouteNames.DEVICE_ROUTE + '/:id',
    exact: true,
    component: DevicePage,
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
  {
    path: RouteNames.ABOUT_ROUTE,
    exact: true,
    component: AboutPage,
  },
  {
    path: RouteNames.HOME_ROUTE,
    exact: true,
    component: HomePage,
  },
];
