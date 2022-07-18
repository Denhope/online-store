import { IBrandType, IDeviceType, IType } from '../../../models/IDevice';

export interface DeviceState {
  types: IType[];
  brands: IBrandType[];
  devices: IDeviceType[];
  selectedType: {};
  selectedBrand: {};
  selectedDevice: IDeviceType;
  isLoading: boolean;
  error: null | string;
}

export enum DeviceActionEnum {
  SET_TYPES = 'SET_TYPES',
  SET_BRANDS = 'SET_BRANDS',
  SET_DEVICES = 'SET_DEVICES',
  SET_SELECTED_TYPE = 'SET_SELECTED_TYPE',
  SET_SELECTED_BRAND = 'SET_SELECTED_BRAND',
  SET_SELECTED_DEVICE = 'SET_SELECTED_DEVICE',
  REQUEST_DEVICES = 'REQUEST_DEVICES',
  RECEIVE_DEVICES_SUCCESS = 'RECEIVE_DEVICES_SUCCESS',
  RECEIVE_DEVICES_ERROR = 'RECEIVE_DEVICES_ERROR',
  SET_IS_LOADING = 'SET_IS_LOADING',
  REQUEST_ONE_DEVICE = 'REQUEST_ONE_DEVICE',
  RECEIVE_ONE_DEVICE_SUCCESS = 'RECEIVE_ONE_DEVICE_SUCCESS',
  RECEIVE_ONE_DEVICE_ERROR = 'RECEIVE_ONE_DEVICE_ERROR',
}

export interface RequestDevicesAction {
  type: DeviceActionEnum.REQUEST_DEVICES;
}
export interface RequestOneDeviceAction {
  type: DeviceActionEnum.REQUEST_ONE_DEVICE;
}
export interface RecieveOneDeviceAction {
  type: DeviceActionEnum.RECEIVE_ONE_DEVICE_SUCCESS;
  payload: IDeviceType;
}
export interface RecieveOneDeviceErrorAction {
  type: DeviceActionEnum.RECEIVE_ONE_DEVICE_ERROR;
  payload: string;
}

export interface RecieveDevicesrAction {
  type: DeviceActionEnum.RECEIVE_DEVICES_SUCCESS;
  payload: Array<IDeviceType>;
}

export interface RecieveDevicesErrorAction {
  type: DeviceActionEnum.RECEIVE_DEVICES_ERROR;
  payload: string;
}

export interface SetIsLoadingAction {
  type: DeviceActionEnum.SET_IS_LOADING;
  payload: boolean;
}

export interface SetTypesAction {
  type: DeviceActionEnum.SET_TYPES;
  payload: Array<IType>;
}
export interface SetBrandsAction {
  type: DeviceActionEnum.SET_BRANDS;
  payload: Array<IBrandType>;
}
export interface SetDelectedDevicesAction {
  type: DeviceActionEnum.SET_SELECTED_DEVICE;
  payload: IDeviceType;
}
export interface SetSelectedTypeAction {
  type: DeviceActionEnum.SET_SELECTED_TYPE;
  payload: {};
}
export interface SetSelectedBrandAction {
  type: DeviceActionEnum.SET_SELECTED_BRAND;
  payload: {};
}

export type DeviceAction =
  | RecieveOneDeviceErrorAction
  | RequestOneDeviceAction
  | RecieveOneDeviceAction
  | RequestDevicesAction
  | RecieveDevicesrAction
  | RecieveDevicesErrorAction
  | SetIsLoadingAction
  | SetSelectedBrandAction
  | SetSelectedTypeAction
  | SetTypesAction
  | SetDelectedDevicesAction
  | SetBrandsAction;
