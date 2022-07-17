import {
  AuthActionEnum,
  SetAuthAction,
  SetErrorAction,
  SetIsLoadingAction,
  SetUserAction,
} from './types';
import { IUser } from '../../../models/IUser';
import AuthService from '../../../services/AuthSerrvices';

import { AppDispatch } from '../..';
import jwt_decode from 'jwt-decode';
export const AuthActionCreators = {
  setUser: (user: IUser): SetUserAction => ({ type: AuthActionEnum.SET_USER, payload: user }),
  setIsAuth: (auth: boolean): SetAuthAction => ({ type: AuthActionEnum.SET_AUTH, payload: auth }),
  setIsLoading: (payload: boolean): SetIsLoadingAction => ({
    type: AuthActionEnum.SET_IS_LOADING,
    payload,
  }),
  setError: (payload: string): SetErrorAction => ({ type: AuthActionEnum.SET_ERROR, payload }),

  login: (email: string, password: string) => async (dispatch: AppDispatch) => {
    try {
      dispatch(AuthActionCreators.setIsLoading(true));
      const response = await AuthService.login(email, password);
      dispatch(AuthActionCreators.setIsAuth(true));
      const userData: IUser = jwt_decode(response.data.token);
      dispatch(
        AuthActionCreators.setUser({
          id: userData.id,
          email: userData.email,
          password: '',
          role: userData.role,
        } as IUser),
      );
      console.log(userData);
    } catch (err) {
      dispatch(AuthActionCreators.setError(err));
      alert(err.response?.data?.message);
    }
  },
  registration: (email: string, password: string) => async (dispatch: AppDispatch) => {
    try {
      dispatch(AuthActionCreators.setIsLoading(true));
      const response = await AuthService.registration(email, password);
      const userData: IUser = jwt_decode(response.data.token);
      dispatch(AuthActionCreators.setIsAuth(true));
      dispatch(
        AuthActionCreators.setUser({
          id: userData.id,
          email: userData.email,
          password: '',
          role: userData.role,
        } as IUser),
      );
      alert('Вы Зарегистрированы');
      console.log(response);
    } catch (err) {
      dispatch(AuthActionCreators.setError(err));
      alert(err.response?.data?.message);
    }
  },
  logout: () => async (dispatch: AppDispatch) => {
    try {
      const response = await AuthService.logout();
      localStorage.removeItem('token');
      dispatch(AuthActionCreators.setUser({} as IUser));
      dispatch(AuthActionCreators.setIsAuth(false));
    } catch (err) {
      dispatch(AuthActionCreators.setError(err));
      console.log(err.response?.data?.message);
    }
  },
};
