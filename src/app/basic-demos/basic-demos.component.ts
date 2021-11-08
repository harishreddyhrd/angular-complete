import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basic-demos',
  // template: `<p>TEMPLATE Works</p>`,
  templateUrl: './basic-demos.component.html',
  styleUrls: ['./basic-demos.component.scss'],
})
export class BasicDemosComponent implements OnInit {
  toDoVideosList: string[] = [
    '9. Working with StyleUrls and Styles',
    '10. Understanding Different types of Selectors supported for creating components in angular.',
    '11. Implement Data Binding in the Angular. Understanding String Interpolation in the Html File.',
  ];
  constructor() {}

  ngOnInit(): void {}
}
