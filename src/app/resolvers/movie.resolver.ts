import { Injectable } from '@angular/core';
import {
  Router,
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
  ActivatedRoute,
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { MovieService } from '../services/movie.service';

interface Movie {
  id: string;
  name: string;
}

@Injectable({
  providedIn: 'root',
})
export class MovieResolver implements Resolve<Movie> {
  constructor(private _movieService: MovieService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<Movie> | Promise<Movie> | Movie {
    let id = route.params['id'];
    let details = this._movieService.getMovieData(id);
    return details;
  }
}
