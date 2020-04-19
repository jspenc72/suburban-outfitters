import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Store } from '@ngxs/store';
import { Observable } from 'rxjs/internal/Observable';
import { ICartItem } from '../models/cart-item.model';
import { tap } from 'rxjs/internal/operators/tap';
import { catchError } from 'rxjs/internal/operators/catchError';
import { throwError } from 'rxjs/internal/observable/throwError';
import { IOrderRequest } from '../models/order.model';
import { IOrderLineItem } from '../models/order-line-item';

@Injectable({
  providedIn: 'root'
})
export class CheckoutService {
  private ENDPOINT = '/orders';
  private LI_ENDPOINT = '/order-line-item';
  private REST_API_SERVER = 'http://localhost:8000/api';

  constructor(private http: HttpClient, private store: Store) { }

  public AddOrder(order: IOrderRequest): Observable<IOrderRequest> {
    return this.http.post<IOrderRequest>(`${this.REST_API_SERVER}${this.ENDPOINT}`, order);
  }

  public AddOrderLineItems(lineItems: IOrderLineItem): Observable<IOrderLineItem> {
    return this.http.post<IOrderLineItem>(`${this.REST_API_SERVER}${this.LI_ENDPOINT}`, lineItems);
  }
}
