import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child-two',
  templateUrl: './child-two.component.html',
  styleUrls: ['./child-two.component.scss'],
})
export class ChildTwoComponent implements OnInit {
  secondChildText: string = 'Second Child Text';
  @Output() emitChildTwoText = new EventEmitter<string>();

  constructor() {}

  ngOnInit(): void {}

  sendToParent() {
    this.emitChildTwoText.emit(this.secondChildText);
  }
}
