import { Category } from './category';

export type Product = {
  id: string;
  brand: string;
  model: string;
  description: string;
  price: number;
  stock: number;
  images: string[];
  category_id: number;
  category: Category;
};
