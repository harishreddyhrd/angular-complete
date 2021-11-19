import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'template-driven-form',
  templateUrl: './template-driven-form.component.html',
  styleUrls: ['./template-driven-form.component.scss'],
})
export class TemplateDrivenFormComponent implements OnInit {
  constructor() {}

  @ViewChild('userForm') userFormData!: NgForm;

  ngOnInit(): void {
    console.log(this.userFormData?.value);
  }

  onInputChange() {
    // console.log(this.userFormData.value.email);
    console.log(this.userFormData);
  }

  onSubmit(form: NgForm) {
    // console.log(form);
    console.log(form.value);
  }
}
