import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Data, Params, Router } from '@angular/router';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss'],
})
export class MovieComponent implements OnInit {
  movie: any = {
    id: '',
    name: '',
    qParams: {},
    fragment: '',
  };
  constructor(
    private _activatedRoute: ActivatedRoute,
    private _router: Router
  ) {}

  ngOnInit(): void {
    this._activatedRoute.data.subscribe((incomingData: Data) => {
      console.log(incomingData);
      this.movie.id = incomingData['id'];
      this.movie.name = incomingData['name'];
    });

    // this._activatedRoute.params.subscribe((data: Params) => {
    //   console.log(data);
    //   this.movie.id = data.id;
    //   this.movie.name = data.name;
    // });
    this._activatedRoute.queryParams.subscribe((incomingData) => {
      console.log(incomingData);
      this.movie.qParams = incomingData;
    });
    this._activatedRoute.fragment.subscribe((incomingData) => {
      console.log(incomingData);
      this.movie.fragment = incomingData;
    });
  }

  onEdit() {
    this._router.navigate(['/movies', this.movie.id, this.movie.name, 'edit'], {
      queryParamsHandling: 'preserve',
    });
    alert('Take a look at the URL once after OK');
  }
}
