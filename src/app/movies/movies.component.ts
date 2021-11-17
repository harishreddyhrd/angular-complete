import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { MovieService } from '../services/movie.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss'],
})
export class MoviesComponent implements OnInit {
  displayAlert: boolean = false;
  constructor(
    private _authService: AuthService,
    private _movieService: MovieService
  ) {}

  ngOnInit(): void {}

  get isLoggedIn() {
    return this._authService.isLoggedIn$.value;
  }

  suggestUserToLoginIfNotLoggedIn() {
    this.displayAlert = this.isLoggedIn ? false : true;
  }
}
