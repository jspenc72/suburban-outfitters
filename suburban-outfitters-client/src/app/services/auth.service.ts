import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, of, throwError, Subject } from 'rxjs';
import { retry, catchError, tap, map } from 'rxjs/operators';
import { ConfigService } from './config.service';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  private ENDPOINT = '/user';
  private LOGIN_ENDPOINT = '/api/login';
  private REGISTER_ENDPOINT = '/api/register';
  private PROFILE_ENDPOINT = '/api/profile';
  private CUSTOMER_ENDPOINT = '/api/customer';
  private LOGOUT_ENDPOINT = '/api/logout';
  private UPDATE_PASSWORD_ENDPOINT = '/api/updatepassword';
  
  private REST_API_SERVER: string;
  public isLoggedIn = false;
  public currentUser: any;
  public httpOptions: any;
  public currentUserSubject = new Subject<any>();
  public currentCustomer: any;
  public currentCustomerSubject = new Subject<any>();

  constructor(private cookieService: CookieService, private httpClient: HttpClient, private configService: ConfigService) {
    this.REST_API_SERVER = configService.REST_API_SERVER;
  }

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

  public sendGetRequest() {
    return this.httpClient.get(this.ENDPOINT).pipe(retry(3), catchError(this.handleError));
  }

  public deleteAccount() {
    return this.httpClient.delete(this.ENDPOINT + '/' + this.currentUser.id).pipe(retry(3), catchError(this.handleError));
  }

  public getUserProfile() {
    console.log('getUserProfile');
    return this.httpClient.get<any>(this.REST_API_SERVER + this.PROFILE_ENDPOINT).pipe(
      tap((res: any) => {
        console.log(res);
        this.currentUser = res;
        this.currentUserSubject.next(res);
      }),
      catchError(this.handleError)
    );
  }

  public getUserCustomer() {
    console.log('getUserCustomer');
    return this.httpClient.get<any>(this.REST_API_SERVER + this.CUSTOMER_ENDPOINT).pipe(
      tap((res: any) => {
        console.log(res);
        this.currentCustomer = res[0];
        this.currentCustomerSubject.next(res[0]);
      }),
      catchError(this.handleError)
    );
  }

  public sendRegisterRequest(form: any) {
    return this.httpClient.post<any>(this.REST_API_SERVER + this.REGISTER_ENDPOINT, form).pipe(
      tap((res: any) => {
        if (res.status === 'success') {
          this.setAuth(res);
        } else {
          console.error(res);
        }
      }),
      catchError(this.handleError)
    );
  }
  private setAuth(res): void {
    this.cookieService.set('user_token', res.data.token);
  }
  public sendLoginRequest(form: any) {
    console.log(form);
    return this.httpClient.post<any>(this.REST_API_SERVER + this.LOGIN_ENDPOINT, form).pipe(
      tap((res: any) => {
        if (res.status === 'success') {
          this.setAuth(res);
        } else {
          console.error(res);
        }
      }),
      catchError(this.handleError)
    );
  }

  public sendLogoutRequest() {
    this.cookieService.delete('user_token');
    console.log('did log out');
    this.currentUserSubject.next({ id: '' });
    this.currentUserSubject.next(null);
    this.currentUser = { id: '' };

    return this.httpClient.post<any>(this.REST_API_SERVER + this.LOGOUT_ENDPOINT, null).pipe(
      tap((res: any) => {
        console.log(res);
        this.isLoggedIn = false;
        this.cookieService.delete('user_token');
        this.currentUser = {};
      }),
      catchError(this.handleError)
    );
  }
  public sendUpdatePasswordRequest(form: any) {
    console.log(form);
    // merge new password with this.currentUser
    return this.httpClient.post<any>(this.REST_API_SERVER + this.UPDATE_PASSWORD_ENDPOINT, form).pipe(
      tap((res: any) => {
        if (res.status === 'success') {
          this.setAuth(res);
        } else {
          console.error(res);
        }
      }),
      catchError(this.handleError)
    );
  }
}
