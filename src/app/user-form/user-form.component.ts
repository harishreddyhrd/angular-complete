import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { RegisterResponse } from '../models/register-response';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss'],
})
export class UserFormComponent implements OnInit {
  isNewUser: boolean = false;
  isLoading: boolean = false;

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
  errorMessage!: any;

  constructor(private _authService: AuthService) {}

  ngOnInit(): void {}

  onSubmit() {
    this.isLoading = true;
    setTimeout(() => {
      return this.isNewUser ? this.onRegister() : this.onLogin();
    }, 2000);
  }

  onRegister() {
    const { email, password } = this.userForm.value;
    console.log('Register', email, password);
    this._authService.register(email, password).subscribe(
      (resp: RegisterResponse) => {
        console.log(resp);
      },
      (errorReceived) => {
        // this.errorMessage = (errorReceived.status == 400) ?  'EMAIL_EXISTS': '';
        console.log(errorReceived.error.error.message);
        this.errorMessage = errorReceived.error.error.message;
      }
    );
    this.isLoading = false;
    console.log(this.isLoading);
  }

  onLogin() {
    console.log('Login', this.userForm.value);
    this.isLoading = false;
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
