import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactViewPageComponent } from './containers/contact-view-page/contact-view-page.component';

const routes: Routes = [{
  path : '',
  component : ContactViewPageComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContactRoutingModule { }
