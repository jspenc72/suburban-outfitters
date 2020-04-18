import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Store } from '@ngxs/store';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class CheckoutService {

  constructor(private http: HttpClient, private store: Store) { }

  public submitOrder(order: any): Observable<any> {
    return this.http.post<any>('localhost:8000/api/orders', order);
  }

  public returnOrder(order: any): Observable<any> {
    return this.http.put<any>('localhost:8000/orders', order);
  }
}
