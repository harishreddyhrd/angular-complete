import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-basic-demos',
  // template: `<p>TEMPLATE Works</p>`,
  templateUrl: './basic-demos.component.html',
  styleUrls: ['./basic-demos.component.scss'],
  // encapsulation: ViewEncapsulation.Emulated,
  encapsulation: ViewEncapsulation.None,
})
export class BasicDemosComponent implements OnInit {
  toDoVideosList: string[] = [
    '9. Working with StyleUrls and Styles',
    '10. Understanding Different types of Selectors supported for creating components in angular.',
    '11. Implement Data Binding in the Angular. Understanding String Interpolation in the Html File.',
    '12. Property Binding in the Angular. Bind Property to the attributes in the angular template.',
    '13. Event Binding in Angular. Handle Click Events in the Angular Explained.',
    '27. Projecting the HTML Content written between the component using ng-content in Angular.',
    '31. Getting access to the ng-content HTML template using @ContentChild in Angular.',
    '32. Create Basic Custom attribute Directive in Angular',
  ];
  conceptsNeedHandsOn: string[] = [
    'StyleUrls & Styles',
    'Selectors - Attribute, Class Selectors',
    'Data binding - String Interpolation',
    'Property Binding',
    'Event Binding',
    'ng-content',
    '@ContentChild() ?',
    'custom-directives ?',
  ];
  constructor() {}

  ngOnInit(): void {}
}
