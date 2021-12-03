import { HttpClient, HttpErrorResponse } from '@angular/common/http';
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
      .pipe(catchError(this.errorHandler));
  }

  login(email: string, password: string) {
    return this._http
      .post<LoginResponse>(
        `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${this.API_KEY}`,
        { email, password, returnSecureToken: true }
      )
      .pipe(catchError(this.errorHandler));
  }

  errorHandler(theError: HttpErrorResponse) {
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
        theErrorMessage = `${theError?.error?.error?.message}: The email address is already in use by another account.`;
        break;
      case 'OPERATION_NOT_ALLOWED':
        theErrorMessage = `${theError?.error?.error?.message}: Password sign-in is disabled for this project.`;
        break;
      case 'TOO_MANY_ATTEMPTS_TRY_LATER':
        theErrorMessage = `${theError?.error?.error?.message}: We have blocked all requests from this device due to unusual activity. Try again later.`;
        break;
      case 'EMAIL_NOT_FOUND':
        theErrorMessage = `${theError?.error?.error?.message}: There is no user record corresponding to this identifier. The user may have been deleted`;
        break;
      case 'INVALID_PASSWORD':
        theErrorMessage = `${theError?.error?.error?.message}: The password is invalid or the user does not have a password`;
        break;
      case 'USER_DISABLED':
        theErrorMessage = `${theError?.error?.error?.message}: The user account has been disabled by an administrator`;
        break;
    }
    return throwError(theErrorMessage);
  }
}
