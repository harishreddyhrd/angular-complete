import { Component, OnInit } from '@angular/core';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'Authentication';
  description = 'Implement authentication in angular';

  constructor(private _authService: AuthService){}

  ngOnInit() {
    this._authService.user$.subscribe(data => {
      console.log("USER :: ", data)
    })
  }
}
