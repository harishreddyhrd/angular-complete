import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  allMovies = [
    { id: '1', name: 'AVP' },
    { id: '2', name: 'SNK' },
    { id: '3', name: 'RRC' },
  ];

  constructor() {}

  getMovieData(id: string) {
    let movie = this.allMovies.filter((movie) => movie.id == id)[0];
    console.log(movie);
    return movie;
  }
}
