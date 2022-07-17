import { IDeviceType } from './IDevice';

export interface IUser {
  id: number;
  email: string;
  password: string;
  role: string;
  basket: IDeviceType[];
}

interface IUserDto {
  email: string;
  exp: number;
  iat: number;
  id: number;
  role: string;
}
