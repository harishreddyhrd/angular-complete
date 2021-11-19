import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  allMovies = [
    { id: '1', name: 'AVP' },
    { id: '2', name: 'SNK' },
    { id: '3', name: 'RRC' },
  ];

  authorName = new BehaviorSubject<string>('');

  constructor() {}

  getMovieData(id: string) {
    let movie = this.allMovies.filter((movie) => movie.id == id)[0];
    console.log(movie);
    return movie;
  }

  setAuthor(name: string) {
    this.authorName.next(name);
  }
}
