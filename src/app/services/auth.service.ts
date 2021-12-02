import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RegisterResponse } from '../models/register-response';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  API_KEY: string = 'AIzaSyD9mCFI9Gsyo0NMdQplDYBHC6tXoi5l4uM';

  constructor(private _http: HttpClient) {}

  register(email: string, password: string) {
    return this._http.post<RegisterResponse>(
      `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${this.API_KEY}`,
      { email: email, password: password, returnSecureToken: true }
    );
  }
}
