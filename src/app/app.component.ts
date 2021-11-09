import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Local references';
  description =
    'Local reference is used to select one of the HTML DOM elements';
  output!: any;

  @ViewChild('inputBox') inputGiven!: ElementRef;

  displayValue() {
    console.log(this.inputGiven);
    this.output = this.inputGiven.nativeElement.value;
  }
}
