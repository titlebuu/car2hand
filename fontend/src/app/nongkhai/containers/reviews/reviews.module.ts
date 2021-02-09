import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginationModule } from 'ngx-bootstrap/pagination';

import { ReviewsRoutingModule } from './reviews-routing.module';
import { ReviewsViewPageComponent } from './containers/reviews-view-page/reviews-view-page.component';
import { HttpService } from './../../shared/services/http.service';

@NgModule({
  declarations: [ReviewsViewPageComponent],
  imports: [
    CommonModule,
    ReviewsRoutingModule,
    PaginationModule.forRoot(),
  ],
  providers: [
    HttpService
  ]
})
export class ReviewsModule { }
