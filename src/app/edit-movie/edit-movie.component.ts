import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-edit-movie',
  templateUrl: './edit-movie.component.html',
  styleUrls: ['./edit-movie.component.scss'],
})
export class EditMovieComponent implements OnInit {
  currentMovieDetails = { id: '', name: '' };
  updatedMovieDetails = { id: '', name: '' };

  constructor(private _activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this._activatedRoute.params.subscribe((data: Params) => {
      console.log(data);
      this.currentMovieDetails.name = data.name;
    });
    this.updatedMovieDetails = { ...this.currentMovieDetails };
  }

  canExit(): boolean | Promise<boolean> | Observable<boolean> {
    console.log(this.updatedMovieDetails, this.currentMovieDetails);
    if (this.currentMovieDetails.name !== this.updatedMovieDetails.name) {
      return confirm(
        'All the unsaved changes would be lost. Are you sure want to exit?'
      )
        ? true
        : false;
    } else {
      return true;
    }
  }
}
