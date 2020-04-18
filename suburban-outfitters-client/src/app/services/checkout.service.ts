import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Store } from '@ngxs/store';
import { Observable } from 'rxjs/internal/Observable';
import { ICartItem } from '../models/cart-item.model';
import { tap } from 'rxjs/internal/operators/tap';
import { catchError } from 'rxjs/internal/operators/catchError';
import { throwError } from 'rxjs/internal/observable/throwError';

@Injectable({
  providedIn: 'root'
})
export class CheckoutService {
  private ENDPOINT = '/orders';
  private REST_API_SERVER = 'http://localhost:8000/api';

  constructor(private http: HttpClient, private store: Store) { }

  handleError(error: HttpErrorResponse) {
    let errorMessage = 'Unknown error!';
    if (error.error instanceof ErrorEvent) {
      // Client-side errors
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // Server-side errors
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}\n ${error.error ? error.error.message : error}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }

  public addOrder(items: ICartItem[]): Observable<string> {
    return this.http.post<boolean>(`${this.REST_API_SERVER}${this.ENDPOINT}`, items).pipe(
      tap((c: any) => console.log(`order submitted ${c}`)),
      catchError(this.handleError)
    );
  }
}
