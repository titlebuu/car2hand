import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutViewPageComponent } from './containers/about-view-page/about-view-page.component';

const routes: Routes = [{
  path : '',
  component: AboutViewPageComponent

}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AboutRoutingModule { }
