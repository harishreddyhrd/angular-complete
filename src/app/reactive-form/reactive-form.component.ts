import { Component, OnInit } from '@angular/core';
import {
  FormArray,
  FormControl,
  FormGroup,
  FormGroupName,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss'],
})
export class ReactiveFormComponent implements OnInit {
  gendersList: string[] = ['male', 'female', 'not specified'];
  myHobbiesList: string[] = [
    'Listening music',
    'Reading books',
    'Watching movies',
  ];

  showPassword: boolean = false;
  showConfirmPassword: boolean = false;

  savedFormData!: any;

  userDataReactiveForm: FormGroup = new FormGroup({
    firstName: new FormControl('Harish'),
    lastName: new FormControl('Reddy'),
    gender: new FormControl('male'),
    mobile: new FormControl('9493000703'),
    dateOfBirth: new FormControl('2002-05-31'),
    salary: new FormControl(4.25),
    hobbies: new FormArray([]),
    loginInformation: new FormGroup({
      email: new FormControl('harish.reddy@gmail.com', [
        Validators.required,
        Validators.email,
      ]),
      password: new FormControl('Wipro@123', [Validators.required]),
      confirmPassword: new FormControl('Wipro@123'),
    }),
    isAdmin: new FormControl(true),
  });

  constructor() {}

  ngOnInit(): void {
    // console.log(
    //   this.userDataReactiveForm.get('loginInformation')?.get('email')
    // );
  }

  get hobbies() {
    return (<FormArray>this.userDataReactiveForm.get('hobbies')).controls;
  }

  triggerAddHobbbyInput() {
    const hobbiesFormArray: FormArray = <FormArray>(
      this.userDataReactiveForm.get('hobbies')
    );
    const newFormControlInput = new FormControl(
      this.myHobbiesList[hobbiesFormArray.length],
      [Validators.required]
    );
    hobbiesFormArray.push(newFormControlInput);
  }

  onSubmit() {
    console.log(this.userDataReactiveForm);
    console.log(this.userDataReactiveForm.value);
    this.savedFormData = this.userDataReactiveForm.value;
  }

  //ERRORS
  showErrorsForEmail() {
    const emailPlaceHolder = this.userDataReactiveForm?.get(
      'loginInformation.email'
    );
    // const emailPlaceHolder = this.userDataReactiveForm
    //   ?.get('loginInformation')
    //   ?.get('email');
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
