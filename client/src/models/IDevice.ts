export interface IType {
  id: any;
  name: string;
}
export interface IBrandType {
  id: any;
  name: string;
}
export interface IDeviceType {
  id: string;
  name: string;
  price: number;
  rating: number;
  img: string;
  discription: Array<{}>;
}
