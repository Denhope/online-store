import { IType, IBrandType } from '../../../models/IDevice';
import { DeviceActionEnum } from './types';

export const DeviceActionCreators = {
  setSelectedType: (type: IType) => ({ type: DeviceActionEnum.SET_SELECTED_TYPE, payload: type }),
  setSelectedBrand: (type: IBrandType) => ({
    type: DeviceActionEnum.SET_SELECTED_BRAND,
    payload: type,
  }),
};
