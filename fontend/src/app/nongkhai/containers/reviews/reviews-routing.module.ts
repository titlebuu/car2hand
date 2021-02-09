import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReviewsViewPageComponent } from './containers/reviews-view-page/reviews-view-page.component';

const routes: Routes = [{
  path : '',
  component : ReviewsViewPageComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReviewsRoutingModule { }
