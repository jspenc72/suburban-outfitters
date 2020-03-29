import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Store } from '@ngxs/store';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

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
}
