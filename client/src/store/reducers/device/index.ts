import { IDeviceType } from '../../../models/IDevice';
import { DeviceAction, DeviceActionEnum, DeviceState } from './types';

const initialState: DeviceState = {
  types: [
    { id: 1, name: 'Телефоны' },
    { id: 2, name: 'Телевизоры' },
  ],
  brands: [
    { id: 1, name: 'Samsung' },
    { id: 2, name: 'Apple' },
    { id: 3, name: 'Huawei' },
    { id: 4, name: 'Xiaomi' },
  ],
  devices: [
    // {
    //   id: 2,
    //   name: 'p40',
    //   price: 123,
    //   rating: 5,
    //   img: 'https://avatars.mds.yandex.net/get-mpic/5376959/img_id2357359423241897064.jpeg/orig',
    // },
  ],
  selectedType: {},
  selectedBrand: {},
  isLoading: false,
  error: '',

  selectedDevice: {} as IDeviceType,
};

export default function deviceReducer(state = initialState, action: DeviceAction): DeviceState {
  switch (action.type) {
    case DeviceActionEnum.REQUEST_DEVICES:
      return { ...state, isLoading: true, error: null };
    case DeviceActionEnum.RECEIVE_DEVICES_SUCCESS:
      return { ...state, devices: action.payload, isLoading: false, error: null };
    case DeviceActionEnum.RECEIVE_DEVICES_ERROR:
      return { ...state, error: action.payload, isLoading: false };
    case DeviceActionEnum.SET_IS_LOADING:
      return { ...state, isLoading: action.payload };
    case DeviceActionEnum.SET_BRANDS:
    case DeviceActionEnum.SET_TYPES:
      return { ...state, types: action.payload };
    case DeviceActionEnum.SET_BRANDS:
      return { ...state, brands: action.payload };
    case DeviceActionEnum.SET_SELECTED_DEVICE:
      return { ...state, selectedDevice: action.payload };
    case DeviceActionEnum.REQUEST_ONE_DEVICE:
      return { ...state, isLoading: true, error: null };
    case DeviceActionEnum.RECEIVE_ONE_DEVICE_SUCCESS:
      return { ...state, selectedDevice: action.payload, isLoading: false, error: null };
    case DeviceActionEnum.RECEIVE_ONE_DEVICE_ERROR:
      return { ...state, error: action.payload, isLoading: false };
    case DeviceActionEnum.SET_SELECTED_BRAND:
      return { ...state, selectedType: action.payload };

    default:
      return state;
  }
}
