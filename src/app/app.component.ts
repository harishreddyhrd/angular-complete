import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Data Binding using String interpolation';
  description = `Data binding is nothing but the transfer of information from the local TS file to local HTML template. In local HTML file the data is represented using the {{ string interpolation }}`;
}
