import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss'],
})
export class UserFormComponent implements OnInit {
  isNewUser: boolean = false;

  userForm: FormGroup = new FormGroup({
    email: new FormControl('harish@wipro.com', [
      Validators.required,
      Validators.email,
    ]),
    password: new FormControl('wipro@123', [
      Validators.required,
      Validators.minLength(8),
    ]),
  });

  constructor() {}

  ngOnInit(): void {}

  onRegister() {
    console.log('Register', this.userForm.value);
  }

  onLogin() {
    console.log('Login', this.userForm.value);
  }

  //ERRORS
  showErrorsForEmail() {
    const emailPlaceHolder = this.userForm.get('email');
    if (emailPlaceHolder?.touched && emailPlaceHolder.invalid) {
      if (emailPlaceHolder.errors?.required) {
        return 'Email id required';
      } else {
        return 'Invalid email';
      }
    } else {
      return;
    }
  }
  showErrorsForPassword() {
    const passwordPlaceHolder = this.userForm.get('password');
    if (passwordPlaceHolder?.touched && passwordPlaceHolder.invalid) {
      if (passwordPlaceHolder.errors?.required) {
        return 'Password is required';
      } else {
        return 'Password should be atleast 8 characters long';
      }
    } else {
      return;
    }
  }
}
