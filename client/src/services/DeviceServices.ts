import { $authHost, $host } from '../http/index';
import axios, { AxiosResponse } from 'axios';
import { IDeviceType, IType } from '../models/IDevice';
import devicesData from '../assets/data/devicesData.json';

interface IDeviceResponse {
  count: number;
  rows: IDeviceType[];
}

export default class DeviceService {
  // static fetchDevices(): Promise<AxiosResponse<IDeviceResponse>> {
  //   return axios.get<IDeviceResponse>(devicesData);
  // }
  static fetchDevices(
    typeId: any,
    brandId: any,
    limit: number,
    page: number,
  ): Promise<AxiosResponse<IDeviceResponse>> {
    return $host.get<IDeviceResponse>('api/device/', { params: { typeId, brandId, limit, page } });
  }
  static fetchOneDevice(id: string): Promise<AxiosResponse<IDeviceResponse>> {
    return $host.get('api/device/' + id);
  }

  // static fetchOneDevice(id: string): Promise<AxiosResponse<IDeviceType[]>> {
  //   // return $host.get<IDeviceType>('api/device/' + id);
  //   // console.log(devicesData[1]);
  //   return axios.get<IDeviceType[]>(devicesData);
  // }
  static fetchBrands(): Promise<AxiosResponse<any>> {
    return $host.get<any>('api/brand');
  }
  static fetchTypes(): Promise<AxiosResponse<IType>> {
    return $host.get<IType>('api/type');
  }
}
