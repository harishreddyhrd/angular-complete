import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnChanges, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Movie } from '../model/movie.model';

@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.scss'],
})
export class AddMovieComponent implements OnInit, OnChanges {
  addMovieForm: FormGroup = new FormGroup({
    movieName: new FormControl('Khadgam', [
      Validators.required,
      Validators.minLength(1),
      Validators.maxLength(15),
    ]),
    movieRating: new FormControl(3.25, [
      Validators.required,
      Validators.min(1),
      Validators.max(5),
    ]),
  });

  submission!: Movie;

  allMovies: Movie[] = [];

  constructor(private _http: HttpClient) {}

  ngOnInit(): void {
    this.getAllMovies();
  }

  ngOnChanges() {
    this.getAllMovies();
  }

  onSubmit() {
    this.submission = this.addMovieForm.value;
    console.log(this.submission);
    this.submitDataToFireBase(this.addMovieForm.value).subscribe(
      (response: { name: string }) => {
        console.log(response);
        this.getAllMovies(); //Adds row to table onSubmit()
      }
    );
    this.addMovieForm.reset();
  }

  getAllMovies() {
    return this.getDataFromFireBase().subscribe((response: Movie[]) => {
      // console.log(response, typeof response);
      for (const id in response) {
        // console.log(id);
        // console.log(response[id]);
        this.allMovies.push({ id, ...response[id] });
      }
      console.log(this.allMovies);
    });
  }

  //SERVICE FUNCTIONS
  //===========================
  URL = `https://angular-complete-d061e-default-rtdb.asia-southeast1.firebasedatabase.app/movies.json`;

  getDataFromFireBase(): Observable<any> {
    return this._http.get(this.URL);
  }

  submitDataToFireBase(data: Movie): Observable<any> {
    // let URL = `http://localhost:3000/movies`;
    return this._http.post(this.URL, data);
  }
  //=============================

  //Errors
  showMovieNameErrors() {
    const movieNamePlaceHolder = this.addMovieForm.get('movieName');
    if (movieNamePlaceHolder?.touched && movieNamePlaceHolder.invalid) {
      if (movieNamePlaceHolder.errors?.required) {
        return 'Movie name is required';
      } else if (movieNamePlaceHolder.errors?.minLength) {
        return 'Movie name should be atleast 1 character long';
      } else {
        return 'Movie name has exceeded the threshold length i.e., 15 characters';
      }
    } else {
      return;
    }
  }

  showMovieRatingErrors() {
    const movieRatingPlaceHolder = this.addMovieForm.get('movieRating');
    if (movieRatingPlaceHolder?.touched && movieRatingPlaceHolder.invalid) {
      if (movieRatingPlaceHolder.errors?.required) {
        return 'Rating is required';
      } else if (movieRatingPlaceHolder.errors?.min) {
        return 'Rating should be atleast 1 of 5';
      } else {
        return 'Rating has exceeded the threshold limit ie., 5';
      }
    } else {
      return;
    }
  }
}

/* const HTTP_OPTIONS = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Credentials': 'true',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': [
          'GET',
          'PUST',
          'POST',
          'PATCH',
          'OPTIONS',
        ],
        'Access-Control-Allow-Headers':
          'Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With',
      }),
    }; */
