import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Attribute directives';
  description = 'ngStyle, ngClass';
  userStatus: boolean = Math.floor(Math.random() * 10) + 1 > 5 ? true : false;

  getBackgroundColor() {
    return this.userStatus ? 'lightgreen' : 'lightcoral';
  }
}
