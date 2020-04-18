import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Store } from '@ngxs/store';
import { Observable } from 'rxjs/internal/Observable';
import { ICartItem } from '../models/cart-item.model';
import { tap } from 'rxjs/internal/operators/tap';
import { catchError } from 'rxjs/internal/operators/catchError';

@Injectable({
  providedIn: 'root'
})
export class CheckoutService {
  private ENDPOINT = '/orders';
  private REST_API_SERVER = 'http://localhost:8000/api';

  constructor(private http: HttpClient, private store: Store) { }

  // public add(items: ICartItem[]): Observable<string> {
  //   return this.http.post<IProduct>(`${this.REST_API_SERVER}${this.ENDPOINT}`, items).pipe(
  //     tap((c: IProduct) => console.log(`order submitted ${c}`)),
  //     catchError(this.handleError)
  //   );
  // }
}
