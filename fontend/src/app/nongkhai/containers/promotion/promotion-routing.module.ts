import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PromotionViewPageComponent } from './containers/promotion-view-page/promotion-view-page.component';

const routes: Routes = [{
  path : '',
  component : PromotionViewPageComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PromotionRoutingModule { }
