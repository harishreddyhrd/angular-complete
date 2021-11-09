import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-child-one',
  templateUrl: './child-one.component.html',
  styleUrls: ['./child-one.component.scss'],
})
export class ChildOneComponent implements OnInit {
  @Input('getTextForChildOne') firstChildText!: string;

  constructor() {}

  ngOnInit(): void {}
}
