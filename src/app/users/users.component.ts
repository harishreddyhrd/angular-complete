import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit {
  url: any = {
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
    // this.userId = this._activatedRoute.snapshot.params['id'];
    // this.userName = this._activatedRoute.snapshot.params['name'];
    this._activatedRoute.params.subscribe((params: Params) => {
      this.url.id = params.id;
      this.url.name = params.name;
    });
    this._activatedRoute.queryParams.subscribe((qParams) => {
      this.url.qParams = qParams;
    });
    this._activatedRoute.fragment.subscribe((fragment) => {
      this.url.fragment = fragment;
    });
  }

  navigateToBalu() {
    this._router.navigate(['/users', 3, 'Balu'], {
      queryParams: { page: 1, search: 'height' },
      fragment: 'refresh',
    });
  }
}
