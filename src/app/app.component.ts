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
  users = data.splice(0, 2);
  keyword: string = '';

  ngOnInit() {
    /*     this.users.forEach((objct: any) => {
      console.log(loopOver(objct));
    }); */
  }

  addDefaultUser() {
    this.users.push({
      id: 20090574,
      name: 'Harish Reddy',
      username: 'Harish',
      email: 'Harish@wipro.com',
      address: {
        street: '2nd line',
        suite: '',
        city: 'Vijayawada',
        zipcode: '520003',
        geo: {
          lat: '-68.6102',
          lng: '-47.0653',
        },
      },
      phone: '91-9493-000-703',
      website: 'harishreddyhrd.info',
      company: {
        name: 'Wipro-Limited',
        catchPhrase: 'Face to face bifurcated interface',
        bs: 'e-enable strategic applications',
      },
    });
    console.log(this.users);
  }
}
