import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Local references';
  description =
    'Local reference is used to select one of the HTML DOM elements';
  output!: string;

  displayValue(htmlInputElement: HTMLInputElement) {
    this.output = htmlInputElement.value;
  }
}
