import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from "@angular/common/http";
import { Observable, of, throwError } from 'rxjs';
import { retry, catchError, tap, map } from 'rxjs/operators';
import { Store } from '@ngxs/store';
import { ICustomer } from '../models/customer.model';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};
@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  private ENDPOINT = "/customers";
  private REST_API_SERVER = "http://localhost:8000/api";
  constructor(private http: HttpClient, private store: Store) { }

  public GetCustomer(userId: number): Observable<any> {
    return this.http.get<any>(`localhost:8000/api/customers/${userId}`);
  }

  public CreateCustomer(user: any): Observable<any> {
    return this.http.post<any>(`localhost:8000/api/customers`, user);
  }

  public UpdateCustomer(user: any): Observable<any> {
    return this.http.put<any>(`localhost:8000/api/customers`, user);
  }

  public DeleteCustomer(userId: number): Observable<any> {
    return this.http.delete<any>(`localhost:8000/api/customers/${userId}`);
  }

  handleError(error: HttpErrorResponse) {
    let errorMessage = 'Unknown error!';
    if (error.error instanceof ErrorEvent) {
      // Client-side errors
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // Server-side errors
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }

  public add(giftcard: ICustomer): Observable<ICustomer> {
    return this.http.post<ICustomer>(this.REST_API_SERVER+this.ENDPOINT, giftcard, httpOptions).pipe(
      tap((c: ICustomer) => console.log(`added card ${c}`)),
      catchError(this.handleError)
    );
  }

  public update(giftcard: ICustomer): Observable<ICustomer> {
    return this.http.put<ICustomer>(this.REST_API_SERVER+this.ENDPOINT+"/"+giftcard.id, giftcard, httpOptions).pipe(
      tap((c: ICustomer) => console.log(`added card ${c}`)),
      catchError(this.handleError)
    );
  }

  public delete(giftcard: ICustomer): Observable<ICustomer> {
    return this.http.delete<ICustomer>(this.REST_API_SERVER+this.ENDPOINT+"/"+giftcard.id, httpOptions).pipe(
      tap((c: ICustomer) => console.log(`deleted card ${c}`)),
      catchError(this.handleError)
    );
  }

  public getAll(): Observable<ICustomer[]> {
    return this.http.get<ICustomer[]>(`${this.REST_API_SERVER+this.ENDPOINT}`)
      .pipe(
        tap(cards => {
          
          console.log('fetched cases')
        }),
        catchError(this.handleError)
      );
  }

  public getBy(id: number): Observable<ICustomer> {
    return this.http.get<ICustomer>(this.REST_API_SERVER+this.ENDPOINT+"/"+id, httpOptions).pipe(
      tap((c: ICustomer) => console.log(`got card ${c}`)),
      catchError(this.handleError)
    );
  }
}
