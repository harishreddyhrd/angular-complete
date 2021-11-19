import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { MovieService } from '../services/movie.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss'],
})
export class MoviesComponent implements OnInit, OnDestroy {
  displayAlert: boolean = false;
  authorSubscription!: Subscription;
  author!: string;
  constructor(
    private _authService: AuthService,
    private _movieService: MovieService
  ) {}

  ngOnInit(): void {
    this.authorSubscription = this._movieService.authorName.subscribe(
      (name) => {
        console.log(name);
        this.author = name;
      }
    );
  }

  get isLoggedIn() {
    return this._authService.isLoggedIn$.value;
  }

  suggestUserToLoginIfNotLoggedIn() {
    this.displayAlert = this.isLoggedIn ? false : true;
  }

  ngOnDestroy() {
    this.authorSubscription.unsubscribe();
  }
}
