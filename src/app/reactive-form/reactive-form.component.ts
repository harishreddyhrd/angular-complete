import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  AsyncValidatorFn,
  FormArray,
  FormControl,
  FormGroup,
  FormGroupName,
  Validators,
} from '@angular/forms';
import { Observable } from 'rxjs';

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
  restrictedEmailsList: string[] = [
    'admin@wipro.com',
    'administrator@wipro.com',
    'imgadmin@wipro.com',
  ];
  existingUserEmailsList: string[] = [
    'harish@gmail.com',
    'rishi@gmail.com',
    'balu@gmail.com',
    'imvk@gmail.com',
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
      email: new FormControl(
        'harish.reddy@gmail.com',
        [
          Validators.required,
          Validators.email,
          this.isEmailRestricted.bind(this),
        ],
        this.doesEmailAlreadyExist.bind(this)
      ),
      password: new FormControl('Wipro@123', [Validators.required]),
      confirmPassword: new FormControl('Wipro@123'),
    }),
    isAdmin: new FormControl(true),
  });

  constructor() {}

  ngOnInit(): void {
    // console.log(this.userDataReactiveForm.get('loginInformation')?.get('email'));

    this.userDataReactiveForm
      .get('firstName')
      ?.valueChanges.subscribe((changes) => {
        console.log(changes);
      });

    this.userDataReactiveForm
      .get('loginInformation.email')
      ?.statusChanges.subscribe((changes) => {
        console.log(changes);
      });
  }

  setTheFormWithDefaultValues() {
    this.userDataReactiveForm.setValue({
      firstName: 'Sonia',
      lastName: 'Gandhi',
      gender: 'female',
      mobile: '9123912391',
      dateOfBirth: '2002-05-31',
      salary: 2.25,
      hobbies: [],
      loginInformation: {
        email: 'sonia.gandhi@gmail.com',
        password: 'alfa@123',
        confirmPassword: 'alfa@123',
      },
      isAdmin: true,
    });
  }

  patchTheFormWithDefaultValues() {
    this.userDataReactiveForm.patchValue({
      firstName: 'Sonia',
      lastName: 'Reddy',
      gender: 'female',
      salary: 12.25,
      loginInformation: {
        email: 'sonia.reddy@gmail.com',
        password: 'Wipro&Alfa',
        confirmPassword: 'Wipro&Alfa',
      },
    });
  }

  // CUSTOM_VALIDATION_FUNCTION()
  // isEmailRestricted() : { [randomString: string]: boolean } | null {}
  isEmailRestricted(emailPlaceHolder: FormControl) {
    //here 'this' is used - hence you have to bind(this) when validationg
    if (this.restrictedEmailsList.includes(emailPlaceHolder.value)) {
      return { emailRestricted: true };
    } else {
      return null;
    }
  }

  // CUSTOM_ASYNC_VALIDATION_FUNCTION()
  // doesEmailAlreadyExist(): Promise<any> | Observable<any> {}
  doesEmailAlreadyExist(emailPlaceHolder: AbstractControl): Promise<any> {
    let promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        //here 'this' is used - hence you have to bind(this) when validationg
        if (this.existingUserEmailsList.includes(emailPlaceHolder.value)) {
          resolve({ emailAlreadyExists: true });
        } else {
          resolve(null);
        }
      }, 2000);
    });
    return promise;
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
    this.userDataReactiveForm.reset();
  }

  //ERRORS
  showErrorsForEmail() {
    const emailPlaceHolder = this.userDataReactiveForm?.get(
      'loginInformation.email'
    );
    // const emailPlaceHolder = this.userDataReactiveForm?.get('loginInformation')?.get('email');

    if (emailPlaceHolder?.touched && emailPlaceHolder?.invalid) {
      if (emailPlaceHolder.errors?.required) {
        return 'Email is required';
      } else if (emailPlaceHolder.errors?.email) {
        return 'Invalid email';
      } else if (emailPlaceHolder.errors?.emailRestricted) {
        return 'Restricted email';
      } else if (emailPlaceHolder.errors?.emailAlreadyExists) {
        return 'Email already registered';
      } else {
        return;
      }
    } else {
      return;
    }
  }
}
