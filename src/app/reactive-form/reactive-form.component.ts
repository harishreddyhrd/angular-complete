import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss'],
})
export class ReactiveFormComponent implements OnInit {
  showPassword: boolean = false;
  showConfirmPassword: boolean = false;

  constructor() {}

  ngOnInit(): void {}
}
