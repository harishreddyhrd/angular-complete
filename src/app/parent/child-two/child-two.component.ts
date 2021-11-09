import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-child-two',
  templateUrl: './child-two.component.html',
  styleUrls: ['./child-two.component.scss'],
})
export class ChildTwoComponent implements OnInit {
  @Input('getTextForChildTwo') secondChildText!: string;

  constructor() {}

  ngOnInit(): void {}
}
