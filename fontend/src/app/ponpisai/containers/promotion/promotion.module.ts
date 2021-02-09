import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PromotionRoutingModule } from './promotion-routing.module';
import { PromotionViewPageComponent } from './containers/promotion-view-page/promotion-view-page.component';


@NgModule({
  declarations: [PromotionViewPageComponent],
  imports: [
    CommonModule,
    PromotionRoutingModule
  ]
})
export class PromotionModule { }
