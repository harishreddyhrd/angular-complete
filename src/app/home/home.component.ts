import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Data, Router } from '@angular/router';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  staticRouteData!: Data;
  intervalSubscription!: Subscription;

  constructor(
    private _router: Router,
    private _activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this._activatedRoute.data.subscribe((incomingData: Data) => {
      this.staticRouteData = incomingData;
    });

    this.intervalSubscription = interval(1000).subscribe((count) => {
      console.log(count);
    });
  }

  navigateToUsers() {
    this._router.navigate(['/users']);
  }
  navigateToCategories() {
    this._router.navigateByUrl('/categories');
  }

  ngOnDestroy() {
    this.intervalSubscription.unsubscribe();
  }
}
