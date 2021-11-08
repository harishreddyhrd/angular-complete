import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyDoubts } from './my-doubts/my-doubts.component';
import { UsersComponent } from './users/users.component';
import { BasicDemosComponent } from './basic-demos/basic-demos.component';

@NgModule({
  declarations: [AppComponent, MyDoubts, UsersComponent, BasicDemosComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
