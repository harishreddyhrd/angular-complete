import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginResponse } from '../models/login-response';
import { RegisterResponse } from '../models/register-response';
import { UserCredentials } from '../models/user-credentials';
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

  constructor(private _authService: AuthService, private _router: Router) {}

  ngOnInit(): void {}

  onSubmit() {
    this.errorMessage = null;
    this.isLoading = true;

    let userCredentials: UserCredentials = this.userForm.value;
    let action: Observable<RegisterResponse | LoginResponse>;

    action = this.isNewUser
      ? this.onRegister(userCredentials)
      : this.onLogin(userCredentials);

    setTimeout(() => {
      action.subscribe(
        (responseReceived: RegisterResponse | LoginResponse) => {
          console.log(responseReceived);
          this.isLoading = false;
          this._router.navigate(['/welcome'])
        },
        (errorMsgReceived) => {
          console.log(errorMsgReceived);
          this.errorMessage = errorMsgReceived;
          this.isLoading = false;
        }
      );
    }, 2000);
  }

  onRegister(userCredentials: UserCredentials) {
    const { email, password } = userCredentials;
    console.log('Register', email, password);
    return this._authService.register(email, password);
  }

  onLogin(userCredentials: UserCredentials) {
    const { email, password } = userCredentials;
    console.log('Login', this.userForm.value);
    return this._authService.login(email, password);
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
