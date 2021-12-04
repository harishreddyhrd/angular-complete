import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserFormComponent } from './user-form/user-form.component';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [
  {path: 'authentication', component: UserFormComponent},
  {path: 'welcome', component: WelcomeComponent},
  {path: '**', redirectTo: 'authentication'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
