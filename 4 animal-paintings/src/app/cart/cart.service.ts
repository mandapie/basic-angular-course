import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Product } from '../models/product';

import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private apiCartUrl = environment.apiUrl + "/cart";
  private apiCheckoutUrl = environment.apiUrl + "/checkout";

  constructor(private http: HttpClient) { }

  getCartItems(): Observable<Product[]> {
    return this.http.get<Product[]>(this.apiCartUrl);
  }

  addToCard(product: Product): Observable<Product> {
    return this.http.post<Product>(this.apiCartUrl, product);
  }

  deleteCart(): Observable<void> {
    return this.http.delete<void>(this.apiCartUrl);
  }

  checkoutCart(cartItems: Product[]): Observable<void> {
    return this.http.post<void>(this.apiCheckoutUrl, cartItems);
  }
}
