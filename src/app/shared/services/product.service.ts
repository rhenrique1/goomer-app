import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private readonly url = 'http://localhost:3000/';

  constructor(private http: HttpClient) { }

  getProductsByRestaurantId(restaurantId: number) {
    return this.http.get<Product[]>(this.url + 'restaurant/products/' + restaurantId);
  }

  getProductById(productId: number) {
    return this.http.get<Product>(this.url + 'products/' + productId);
  }

  getProductsNameLike(restaurantId: number, nameLike: string) {
    const param = JSON.stringify({ nameLike: nameLike, restaurantId: restaurantId })
    return this.http.get<Product[]>(this.url + 'products/name/' + param);
  }
}
