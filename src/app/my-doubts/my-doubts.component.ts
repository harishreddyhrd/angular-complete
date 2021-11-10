import { Component } from '@angular/core';

@Component({
  selector: 'my-doubts',
  templateUrl: './my-doubts.component.html',
})
export class MyDoubts {
  queriesList: string[] = [
    "What's angular-cli? purpose of using that?",
    "What's a @Decorator?",
    '@Input() & @Output() - Revise',
    'View-encapsulation?',
    'Emulated, None, Shadow DOM?',
    'ng-content, ngProjectAs',
  ];
}
