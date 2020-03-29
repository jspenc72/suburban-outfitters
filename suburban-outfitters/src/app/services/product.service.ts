import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Store } from '@ngxs/store';
import { Observable } from 'rxjs/internal/Observable';
import { IProduct } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient, private store: Store) { }

  public GetAllProducts(username: string, password: string): Observable<any> {
    return this.http.get<any>('localhost:8000/products');
  }

  public GetProductDetails(productId: number): Observable<IProduct> {
    return this.http.get<IProduct>(`localhost:8000/products/${productId}`);
  }
}
