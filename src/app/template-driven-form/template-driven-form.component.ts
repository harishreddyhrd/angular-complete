import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'template-driven-form',
  templateUrl: './template-driven-form.component.html',
  styleUrls: ['./template-driven-form.component.scss'],
})
export class TemplateDrivenFormComponent implements OnInit {
  defaultPassword: string = 'Wipro@123';
  showPassword: boolean = true;
  showConfirmPassword: boolean = true;
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

  //Fill the form
  fillTheFormWithDefaultValues() {
    this.userFormData.form.setValue({
      dateOfBirth: '2002-05-31',
      firstName: 'Harish',
      gender: 'male',
      isAdmin: true,
      lastName: 'Reddy',
      loginInformation: {
        email: 'harish.reddy@gmail.com',
        password: 'Wipro@123',
        confirmPassword: 'Wipro@123',
      },
      mobile: '9493000703',
      salary: 4.25,
    });
  }

  //ERRORS
  showErrorsForEmail() {
    const emailPlaceHolder = this.userFormData?.controls?.email;
    if (emailPlaceHolder?.touched && emailPlaceHolder?.invalid) {
      if (emailPlaceHolder.errors?.required) {
        return 'Email is required';
      } else if (emailPlaceHolder.errors?.email) {
        return 'Invalid email';
      } else {
        return;
      }
    } else {
      return;
    }
  }
}
