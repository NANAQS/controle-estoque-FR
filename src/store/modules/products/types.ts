export interface IProducts {
  photo: string;
  ordem: number;
  ref: number;
  name: string;
  category: string;
  un: number;
  purchase: string;
  sale: string;
  gain: string;
  estoque: number;
  stockMin: string;
  register: string;
}

export interface IProductsInterface {
  products: IProducts[];
}
