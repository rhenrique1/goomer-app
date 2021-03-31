import { OpeningHours } from "./openingHours";
import { Product } from "./product";

export interface Restaurant {
  id: number;
  photo: string;
  name: string;
  address: string;
  openingHours: OpeningHours[];
  products: Product[];
}
