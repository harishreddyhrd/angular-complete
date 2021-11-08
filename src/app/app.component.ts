import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Event Binding';
  description = `Event binding = <code>appending the data on an event fire</code>`;
  showDescription: boolean = false;
  givenInput!: string;

  toggleDescription() {
    this.showDescription = !this.showDescription;
  }

  eventHandler(event: Event) {
    console.log(event);
    console.log((event.target as HTMLInputElement).value);
    console.log((<HTMLInputElement>event.target).value);
    this.givenInput = (<HTMLInputElement>event.target).value;
  }
}
