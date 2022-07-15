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
    {
      id: 1,
      name: 'Samsung',
      price: 123,
      rating: 5,
      img: 'https://avatars.mds.yandex.net/get-mpic/5376959/img_id2357359423241897064.jpeg/orig',
    },
    {
      id: 2,
      name: 'Samsung',
      price: 123,
      rating: 5,
      img: 'https://avatars.mds.yandex.net/get-mpic/5376959/img_id2357359423241897064.jpeg/orig',
    },
    {
      id: 3,
      name: 'Samsung',
      price: 123,
      rating: 5,
      img: 'https://avatars.mds.yandex.net/get-mpic/5376959/img_id2357359423241897064.jpeg/orig',
    },
    {
      id: 4,
      name: 'Samsung',
      price: 123,
      rating: 5,
      img: 'https://avatars.mds.yandex.net/get-mpic/5376959/img_id2357359423241897064.jpeg/orig',
    },
  ],
  selectedType: {},
  selectedBrand: {},
};

export default function deviceReducer(state = initialState, action: DeviceAction): DeviceState {
  switch (action.type) {
    case DeviceActionEnum.SET_TYPES:
      return { ...state, types: action.payload };
    case DeviceActionEnum.SET_BRANDS:
      return { ...state, brands: action.payload };
    case DeviceActionEnum.SET_DEVICES:
      return { ...state, devices: action.payload };

    case DeviceActionEnum.SET_SELECTED_BRAND:
      return { ...state, selectedType: action.payload };

    default:
      return state;
  }
}
