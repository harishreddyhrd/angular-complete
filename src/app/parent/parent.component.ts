import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss'],
})
export class ParentComponent implements OnInit {
  parentText!: string;
  constructor() {}

  ngOnInit(): void {}

  grabChildOneText(emittedData: string) {
    this.parentText = emittedData;
  }
  grabChildTwoText(emittedData: string) {
    this.parentText = emittedData;
  }
}
