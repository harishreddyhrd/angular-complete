import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = '2-way data Binding';
  description = `2-way data binding = `;
  givenInput: string = '2-way Binding';

  eventHandler(event: Event) {
    console.log(event);
    console.log((event.target as HTMLInputElement).value);
    console.log((<HTMLInputElement>event.target).value);
    this.givenInput = (<HTMLInputElement>event.target).value;
  }
}
