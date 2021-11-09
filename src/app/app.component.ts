import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Parent-Child Communication';
  description =
    'Demonstaration of how data passes from a parent component to child component';
}
