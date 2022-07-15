import { IBrandType, IDeviceType, IType } from '../../../models/IDevice';

export interface DeviceState {
  types: IType[];
  brands: IBrandType[];
  devices: IDeviceType[];
  selectedType: {};
  selectedBrand: {};
}
export enum DeviceActionEnum {
  SET_TYPES = 'SET_TYPES',
  SET_BRANDS = 'SET_BRANDS',
  SET_DEVICES = 'SET_DEVICES',
  SET_SELECTED_TYPE = 'SET_SELECTED_TYPE',
  SET_SELECTED_BRAND = 'SET_SELECTED_BRAND',
}

export interface SetTypesAction {
  type: DeviceActionEnum.SET_TYPES;
  payload: Array<IType>;
}
export interface SetBrandsAction {
  type: DeviceActionEnum.SET_BRANDS;
  payload: Array<IBrandType>;
}
export interface SetDevicesAction {
  type: DeviceActionEnum.SET_DEVICES;
  payload: Array<IDeviceType>;
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
  | SetSelectedBrandAction
  | SetSelectedTypeAction
  | SetTypesAction
  | SetDevicesAction
  | SetBrandsAction;
