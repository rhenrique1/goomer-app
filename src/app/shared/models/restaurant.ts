import { OpeningHours } from "./openingHours";

export interface Restaurant {
  id: number;
  photo: string;
  name: string;
  address: string;
  openingHours: OpeningHours[];
}
