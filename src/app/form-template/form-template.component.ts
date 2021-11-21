import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-template',
  templateUrl: './form-template.component.html',
  styleUrls: ['./form-template.component.scss'],
})
export class FormTemplateComponent implements OnInit {
  showPassword: boolean = false;
  showConfirmPassword: boolean = false;

  constructor() {}

  ngOnInit(): void {}
}
