import { Component } from '@angular/core';
import { element } from 'protractor';
import { allValuesOf } from './allValuesOf';
import { data } from './data';
import { loopOver } from './loopOver';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Filter pipe';
  description = 'Filter pipe demo';
  users = data;
  keyword: string = '';

  ngOnInit() {
    /*     this.users.forEach((objct: any) => {
      console.log(loopOver(objct));
    }); */
  }
}
