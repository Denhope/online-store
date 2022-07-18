import { AppDispatch } from '../..';
import { IType, IBrandType } from '../../../models/IDevice';
import { DeviceActionEnum, RecieveDevicesErrorAction, SetIsLoadingAction } from './types';
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

  featchDevices: () => async (dispatch: AppDispatch) => {
    try {
      dispatch({ type: DeviceActionEnum.REQUEST_DEVICES });
      const response = await DeviceService.fetchDevices();
      dispatch({ type: DeviceActionEnum.RECEIVE_DEVICES_SUCCESS, payload: response.data.rows });
    } catch (err) {
      dispatch({ type: DeviceActionEnum.RECEIVE_DEVICES_ERROR, payload: err });
    }
  },
  fethOneDevice: (id: string) => async (dispatch: AppDispatch) => {
    try {
      dispatch({ type: DeviceActionEnum.REQUEST_ONE_DEVICE });
      const response = await DeviceService.fetchOneDevice(id);
      dispatch({ type: DeviceActionEnum.RECEIVE_ONE_DEVICE_SUCCESS, payload: response.data });
      // console.log(response);
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

  setSelectedType: (type: IType) => ({ type: DeviceActionEnum.SET_SELECTED_TYPE, payload: type }),
  setSelectedBrand: (type: IBrandType) => ({
    type: DeviceActionEnum.SET_SELECTED_BRAND,
    payload: type,
  }),
};
