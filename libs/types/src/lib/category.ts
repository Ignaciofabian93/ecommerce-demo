import { Product } from './product';

export type Category = {
  id: number;
  name: string;
  image_url: string;
  products: Product[];
};
