import { AppDispatch } from '../..';
import { IType, IBrandType } from '../../../models/IDevice';
import {
  DeviceActionEnum,
  RecieveDevicesErrorAction,
  SetIsLoadingAction,
  SetLimitAction,
  SetPageAction,
  SetSelectedTypeAction,
} from './types';
import DeviceService from '../../../services/DeviceServices';

export const DeviceActionCreators = {
  setIsLoding: (payload: boolean): SetIsLoadingAction => ({
    type: DeviceActionEnum.SET_IS_LOADING,
    payload,
  }),
  setError: (payload: string): RecieveDevicesErrorAction => ({
    type: DeviceActionEnum.RECEIVE_DEVICES_ERROR,
    payload,
  }),

  featchDevices:
    (typeId: any, brandId: any, limit: number, page: number) => async (dispatch: AppDispatch) => {
      try {
        dispatch({ type: DeviceActionEnum.REQUEST_DEVICES });
        const response = await DeviceService.fetchDevices(typeId, brandId, limit, page);
        dispatch({ type: DeviceActionEnum.RECEIVE_DEVICES_SUCCESS, payload: response.data.rows });
        dispatch({ type: DeviceActionEnum.SET_TOTAL_COUNT, payload: response.data.count });
        dispatch({ type: DeviceActionEnum.SET_LIMIT, payload: limit });
        dispatch({ type: DeviceActionEnum.SET_PAGE, payload: page });
      } catch (err) {
        dispatch({ type: DeviceActionEnum.RECEIVE_DEVICES_ERROR, payload: err });
      }
    },
  setPageNumber: (payload: number): SetPageAction => ({
    type: DeviceActionEnum.SET_PAGE,
    payload,
  }),
  setLimit: (payload: number): SetLimitAction => ({
    type: DeviceActionEnum.SET_LIMIT,
    payload,
  }),

  fethOneDevice: (id: string) => async (dispatch: AppDispatch) => {
    try {
      dispatch({ type: DeviceActionEnum.REQUEST_ONE_DEVICE });
      const response = await DeviceService.fetchOneDevice(id);
      dispatch({ type: DeviceActionEnum.RECEIVE_ONE_DEVICE_SUCCESS, payload: response.data });

      // dispatch({
      //   type: DeviceActionEnum.SET_SELECTED_DEVICE,
      //   payload: response.data,
      // });
      // dispatch({
      //   type: DeviceActionEnum.SET_SELECTED_DEVICE,
      //   payload: response.data[Number(id) - 1],
      // });
      // dispatch(DeviceActionCreators.setIsLoding(false));
      // return response.data[Number(id) - 1];
    } catch (err) {
      dispatch({ type: DeviceActionEnum.RECEIVE_ONE_DEVICE_ERROR, payload: err });
    }
  },
  fetchTypes: () => async (dispatch: AppDispatch) => {
    try {
      dispatch({ type: DeviceActionEnum.REQUEST_TYPES });
      const response = await DeviceService.fetchTypes();
      dispatch({ type: DeviceActionEnum.RECEIVE_TYPES_SUCCESS, payload: response.data });
    } catch (err) {
      dispatch({ type: DeviceActionEnum.RECEIVE_TYPES_ERROR, payload: err });
    }
  },

  fetchBrands: () => async (dispatch: AppDispatch) => {
    try {
      dispatch({ type: DeviceActionEnum.REQUEST_BRANDS });
      const response = await DeviceService.fetchBrands();
      dispatch({ type: DeviceActionEnum.RECEIVE_BRANDS_SUCCESS, payload: response.data });
    } catch (err) {
      dispatch({ type: DeviceActionEnum.RECEIVE_BRANDS_ERROR, payload: err });
    }
  },

  setSelectedType: (type: IType) => ({
    type: DeviceActionEnum.SET_SELECTED_TYPE,
    payload: type.id,
  }),
  setSelectedBrand: (type: IBrandType) => ({
    type: DeviceActionEnum.SET_SELECTED_BRAND,
    payload: type.id,
  }),
};
