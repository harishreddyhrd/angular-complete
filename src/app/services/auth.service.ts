import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { OperatorFunction, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { LoginResponse } from '../models/login-response';
import { RegisterResponse } from '../models/register-response';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  API_KEY: string = 'AIzaSyD9mCFI9Gsyo0NMdQplDYBHC6tXoi5l4uM';

  constructor(private _http: HttpClient) {}

  register(email: string, password: string) {
    return this._http
      .post<RegisterResponse>(
        `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${this.API_KEY}`,
        { email: email, password: password, returnSecureToken: true }
      )
      .pipe(this.errorHandler());
  }

  login(email: string, password: string) {
    return this._http
      .post<LoginResponse>(
        `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${this.API_KEY}`,
        { email, password, returnSecureToken: true }
      )
      .pipe(this.errorHandler());
  }

  errorHandler(): OperatorFunction<
    RegisterResponse | LoginResponse,
    RegisterResponse | LoginResponse
  > {
    return catchError((theError) => {
      console.log(theError);
      let theErrorMessage = '';
      if (!theError.error || !theError.error.error) {
        if (theError.status == 0) {
          theErrorMessage = 'Internet Disconnected';
        }
        return throwError(theErrorMessage);
      }
      switch (theError?.error?.error?.message) {
        case 'EMAIL_EXISTS':
          theErrorMessage = 'Email already exists.';
          break;
        case 'EMAIL_NOT_FOUND':
          theErrorMessage = 'Email does not exist.';
          break;
      }
      return throwError(theErrorMessage);
    });
  }
}
