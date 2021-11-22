import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss'],
})
export class ReactiveFormComponent implements OnInit {
  gendersList: string[] = ['male', 'female', 'not specified'];

  showPassword: boolean = false;
  showConfirmPassword: boolean = false;

  userDataReactiveForm: FormGroup = new FormGroup({
    firstName: new FormControl('Harish'),
    lastName: new FormControl('Reddy'),
    gender: new FormControl('male'),
    mobile: new FormControl('9493000703'),
    dateOfBirth: new FormControl('2002-05-31'),
    salary: new FormControl(4.25),
    loginInformation: new FormGroup({
      email: new FormControl('harish.reddy@gmail.com'),
      password: new FormControl('Wipro@123'),
      confirmPassword: new FormControl('Wipro@123'),
    }),
    isAdmin: new FormControl(true),
  });

  constructor() {}

  ngOnInit(): void {}
}
