import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basic-demos',
  template: `<p>TEMPLATE Works</p>`,
  // templateUrl: './basic-demos.component.html',
  styleUrls: ['./basic-demos.component.scss'],
})
export class BasicDemosComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
