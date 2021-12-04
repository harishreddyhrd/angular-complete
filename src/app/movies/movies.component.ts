import { Component, OnInit } from '@angular/core';
import { Movie } from '../models/movie';
import { MovieService } from '../services/movie.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss'],
})
export class MoviesComponent implements OnInit {
  allMovies: Movie[] = [];
  constructor(private _movieService: MovieService) {}

  ngOnInit(): void {
    this.getAllMovies();
  }

  getAllMovies() {
    return this._movieService
      .getDataFromFireBase()
      .subscribe((response: Movie[]) => {
        for (const id in response) {
          this.allMovies.push({ id, ...response[id] });
        }
      });
  }
}
