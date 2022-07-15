import { AuthActionCreators } from './reducers/auth/action-creators';
import { DeviceActionCreators } from './reducers/device/action-creators';
export const allActionCreators = {
  ...AuthActionCreators,
  ...DeviceActionCreators,
};
