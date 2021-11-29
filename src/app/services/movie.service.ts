import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
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
    let searchParameters = new HttpParams().set('keyword', 'Telugu');
    searchParameters = searchParameters.append('actor', 'Allu Arjun');
    searchParameters = searchParameters.append('actress', 'Kajal Aggarwal');

    return this._http.get(this.URL, {
      headers: new HttpHeaders({ 'function-used': 'GET-DATA' }),
      params: searchParameters,
    });
  }

  submitDataToFireBase(data: Movie): Observable<any> {
    return this._http.post(this.URL, data, {
      headers: new HttpHeaders({ 'function-used': 'POST-DATA' }),
      observe: 'response',
    });
  }

  deleteAllDataFromFireBase() {
    return this._http.delete(this.URL, {
      observe: 'events',
    });
  }
}
