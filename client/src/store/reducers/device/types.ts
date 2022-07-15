import { IBrandType, IDeviceType, IType } from '../../../models/IDevice';

export interface DeviceState {
  types: IType[];
  brands: IBrandType[];
  devices: IDeviceType[];
}
export enum DeviceActionEnum {
  SET_TYPES = 'SET_TYPES',
  SET_BRANDS = 'SET_BRANDS',
  SET_DEVICES = 'SET_DEVICES',
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

export type DeviceAction = SetTypesAction | SetDevicesAction | SetBrandsAction;
