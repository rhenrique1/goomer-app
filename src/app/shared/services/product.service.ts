import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private readonly url = 'http://localhost:3000/products';

  constructor(private http: HttpClient) { }

  getProductsByRestaurantId(restaurantId: number) {
    return this.http.get<Product[]>(this.url + '/' + restaurantId);
  }

  getProductById(productId: number) {
    return this.http.get<Product>(this.url + '/' + productId);
  }

}
