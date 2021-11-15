import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isLoggedIn$ = new BehaviorSubject(false);
  constructor() {}

  logIn() {
    this.isLoggedIn$.next(true);
  }
  logOut() {
    this.isLoggedIn$.next(false);
  }
}
