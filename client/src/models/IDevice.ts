export interface IType {
  id: number;
  name: string;
}
export interface IBrandType {
  id: number;
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
