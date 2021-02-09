import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginUserPageComponent } from './containers/login-user-page/login-user-page.component';

const routes: Routes = [{
  path : '',
  component : LoginUserPageComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
