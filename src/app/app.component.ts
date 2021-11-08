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

  toggleDescription() {
    this.showDescription = !this.showDescription;
  }
}
