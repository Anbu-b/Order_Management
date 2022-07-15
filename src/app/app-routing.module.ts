import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CanDeactivateGuard } from './Authentication/candeactivate.guard';
import { HomeComponent } from './Components/home/home.component';
import { LoginComponent } from './Components/login/login.component';

const routes: Routes = [
  { path: 'Login', component: LoginComponent },
  { path: 'Home', component: HomeComponent ,canDeactivate:[CanDeactivateGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
