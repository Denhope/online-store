import { IDeviceType } from '../../../models/IDevice';
import { DeviceAction, DeviceActionEnum, DeviceState } from './types';

const initialState: DeviceState = {
  types: [
    // { id: 1, name: 'Телефоны' },
    // { id: 2, name: 'Телевизоры' },
  ],
  brands: [
    // { id: 1, name: 'Samsung' },
    // { id: 2, name: 'Apple' },
    // { id: 3, name: 'Huawei' },
    // { id: 4, name: 'Xiaomi' },
  ],
  devices: [],
  selectedType: null,
  selectedBrand: null,
  isLoading: false,
  error: '',

  selectedDevice: {} as IDeviceType,
  page: 1,
  totalCount: 0,
  limit: 3,
};

export default function deviceReducer(state = initialState, action: DeviceAction): DeviceState {
  switch (action.type) {
    case DeviceActionEnum.SET_IS_LOADING:
      return { ...state, isLoading: action.payload };

    case DeviceActionEnum.REQUEST_DEVICES:
      return { ...state, isLoading: true, error: null };
    case DeviceActionEnum.RECEIVE_DEVICES_SUCCESS:
      return { ...state, devices: action.payload, isLoading: false, error: null };
    case DeviceActionEnum.RECEIVE_DEVICES_ERROR:
      return { ...state, error: action.payload, isLoading: false };

    case DeviceActionEnum.REQUEST_TYPES:
      return { ...state, isLoading: true, error: null };
    case DeviceActionEnum.RECEIVE_TYPES_SUCCESS:
      return { ...state, types: action.payload };
    case DeviceActionEnum.RECEIVE_TYPES_ERROR:
      return { ...state, error: action.payload, isLoading: false };

    case DeviceActionEnum.REQUEST_BRANDS:
      return { ...state, isLoading: true, error: null };
    case DeviceActionEnum.RECEIVE_BRANDS_SUCCESS:
      return { ...state, brands: action.payload };
    case DeviceActionEnum.RECEIVE_BRANDS_ERROR:
      return { ...state, error: action.payload, isLoading: false };

    case DeviceActionEnum.SET_TOTAL_COUNT:
      return { ...state, totalCount: action.payload };
    case DeviceActionEnum.SET_PAGE:
      return { ...state, page: action.payload };
    case DeviceActionEnum.SET_LIMIT:
      return { ...state, limit: action.payload };

    case DeviceActionEnum.REQUEST_ONE_DEVICE:
      return { ...state, isLoading: true, error: null };
    case DeviceActionEnum.RECEIVE_ONE_DEVICE_SUCCESS:
      return { ...state, selectedDevice: action.payload, isLoading: false, error: null };
    case DeviceActionEnum.RECEIVE_ONE_DEVICE_ERROR:
      return { ...state, error: action.payload, isLoading: false };
    case DeviceActionEnum.SET_SELECTED_BRAND:
      return { ...state, selectedBrand: action.payload };
    case DeviceActionEnum.SET_SELECTED_TYPE:
      return { ...state, selectedType: action.payload };
    case DeviceActionEnum.SET_SELECTED_DEVICE:
      return { ...state, selectedDevice: action.payload };

    default:
      return state;
  }
}
