import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-edit-movie',
  templateUrl: './edit-movie.component.html',
  styleUrls: ['./edit-movie.component.scss'],
})
export class EditMovieComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  canExit(): boolean | Promise<boolean> | Observable<boolean> {
    return confirm('Are you sure want to exit?') ? true : false;
  }
}
