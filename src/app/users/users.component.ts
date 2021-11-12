import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit {
  userId!: number;
  userName!: string;
  constructor(private _activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    // this.userId = this._activatedRoute.snapshot.params['id'];
    // this.userName = this._activatedRoute.snapshot.params['name'];
    this._activatedRoute.params.subscribe((params: Params) => {
      this.userId = params.id;
      this.userName = params.name;
    });
  }
}
