import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child-one',
  templateUrl: './child-one.component.html',
  styleUrls: ['./child-one.component.scss'],
})
export class ChildOneComponent implements OnInit {
  firstChildText: string = 'First Child Text';
  @Output() emitChildOneText = new EventEmitter<string>();

  constructor() {}

  ngOnInit(): void {}

  sendToParent() {
    this.emitChildOneText.emit(this.firstChildText);
  }
}
