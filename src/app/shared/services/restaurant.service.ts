import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Restaurant } from '../models/restaurant';

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {

  private readonly url = 'http://localhost:3000/restaurants/';

  constructor(private http: HttpClient) { }

  getRestaurants() {
    return this.http.get<Restaurant[]>(this.url);
  }

  getRestaurantById(restaurantId: number) {
    return this.http.get<Restaurant>(this.url + restaurantId);
  }

  getRestaurantsNameLike(nameLike: string) {
    const param = JSON.stringify({ nameLike: nameLike })
    return this.http.get<Restaurant[]>(this.url + 'name/' + param);
  }
}
