import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'inititate';
  description = 'description';

  constructor(private _authService: AuthService) {}

  signIn() {
    this._authService.logIn();
  }
  signOut() {
    this._authService.logOut();
  }
  get isLoggedIn() {
    return this._authService.isLoggedIn$.value;
  }
}
