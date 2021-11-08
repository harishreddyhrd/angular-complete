import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyDoubts } from './my-doubts/my-doubts.component';
import { UsersComponent } from './users/users.component';

@NgModule({
  declarations: [AppComponent, MyDoubts, UsersComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
