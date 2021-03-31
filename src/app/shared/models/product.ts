import { Restaurant } from "./restaurant";

export interface Product {
  id: number;
  photo: string;
  name: string;
  description: string;
  price: number;
  promotionalPrice: number;
}
