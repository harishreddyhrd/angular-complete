import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Movie } from '../models/movie';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  URL = `https://angular-complete-d061e-default-rtdb.asia-southeast1.firebasedatabase.app/movies.json`;

  constructor(private _http: HttpClient, private _authService: AuthService) {}

  getDataFromFireBase(): Observable<any> {
    let searchParams = new HttpParams();
    const userToken = this._authService.user$.value._token;
    searchParams = searchParams.append('auth', userToken)
    return this._http.get(this.URL, {
      params: searchParams,
    });
  }

  submitDataToFireBase(data: Movie): Observable<any> {
    let searchParams = new HttpParams();
    const userToken = this._authService.user$.value._token;
    searchParams = searchParams.append('auth', userToken);
    return this._http.post(this.URL, data, {
      params: searchParams,
    });
  }

  deleteAllDataFromFireBase() {
    let searchParams = new HttpParams();
    const userToken = this._authService.user$.value._token;
    searchParams = searchParams.append('auth', userToken);
    return this._http.delete(this.URL, {
      params: searchParams,
    });
  }
}
