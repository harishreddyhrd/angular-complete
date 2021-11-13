import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss'],
})
export class MovieComponent implements OnInit {
  movieName: any;
  constructor(private _activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this._activatedRoute.params.subscribe((data) => {
      this.movieName = data.name;
    });
  }
}
