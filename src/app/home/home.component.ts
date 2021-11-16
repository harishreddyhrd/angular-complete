import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Data, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  staticRouteData!: Data;
  constructor(
    private _router: Router,
    private _activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this._activatedRoute.data.subscribe((incomingData: Data) => {
      this.staticRouteData = incomingData;
    });
  }

  navigateToUsers() {
    this._router.navigate(['/users']);
  }
  navigateToCategories() {
    this._router.navigateByUrl('/categories');
  }
}
