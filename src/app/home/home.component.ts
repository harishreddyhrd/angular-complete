import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Data, Router } from '@angular/router';
import { interval, Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  staticRouteData!: Data;
  intervalSubscription!: Subscription;
  customObservableSubscription!: Subscription;

  constructor(
    private _router: Router,
    private _activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this._activatedRoute.data.subscribe((incomingData: Data) => {
      this.staticRouteData = incomingData;
    });

    // this.intervalSubscription = interval(1000).subscribe((count) => {
    //   console.log(count);
    // });

    let customObservable: Observable<number> = new Observable((observer) => {
      let count = 0;
      setInterval(() => {
        observer.next(count);
        if (count > 10) {
          observer.error('Count > 10');
        }
        if (count > 5) {
          observer.complete();
        }
        count++;
      }, 1000);
    });

    this.customObservableSubscription = customObservable.subscribe(
      (count) => {
        console.log(`theCustomObservable :: ${count}`);
      },
      (error) => {
        console.log(`theCustomObservable :: ERROR = ${error}`);
      },
      () => {
        console.log(`Observation complete`);
      }
    );
  }

  navigateToUsers() {
    this._router.navigate(['/users']);
  }
  navigateToCategories() {
    this._router.navigateByUrl('/categories');
  }

  ngOnDestroy() {
    // this.intervalSubscription.unsubscribe();
    this.customObservableSubscription.unsubscribe();
  }
}
