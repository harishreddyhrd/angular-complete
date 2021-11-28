import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Movie } from '../model/movie.model';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  URL = `https://angular-complete-d061e-default-rtdb.asia-southeast1.firebasedatabase.app/movies.json`;

  constructor(private _http: HttpClient) {}

  getDataFromFireBase(): Observable<any> {
    return this._http.get(this.URL);
  }

  submitDataToFireBase(data: Movie): Observable<any> {
    return this._http.post(this.URL, data);
  }
}
