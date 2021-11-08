import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Property Binding';
  description = `Property binding = <code>appending the data through an html attribute or property</code>`;
}
