import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
// import { ThaiDatePipe } from './pipes/thai-date.pipe';
import { TransactionService } from './services/transaction.service';
import { HttpService } from './services/http.service';
import { ObserCarService } from './services/obser-car.service';

import { CarouselPageComponent } from './containers/carousel-page/carousel-page.component';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { NavbarPageComponent } from './containers/navbar-page/navbar-page.component';
import { NavbarLeftPageComponent } from './containers/navbar-left-page/navbar-left-page.component';
import { FooterPageComponent } from './containers/footer-page/footer-page.component';
import { CarAllComponent } from './containers/car-all/car-all.component';
import { ScrollbarAllComponent } from './containers/scrollbar-all/scrollbar-all.component';

@NgModule({
  imports: [
    CommonModule,
    CarouselModule,
    PaginationModule.forRoot(),
    FormsModule,
    HttpModule,
    RouterModule
    // FacebookModule.forRoot(),
  ],
  declarations: [
    // ThaiDatePipe,
    CarouselPageComponent,
    NavbarPageComponent,
    NavbarLeftPageComponent,
    FooterPageComponent,
    CarAllComponent,
    ScrollbarAllComponent
  ],
  exports: [
    // ThaiDatePipe,
    CarouselPageComponent,
    NavbarPageComponent,
    NavbarLeftPageComponent,
    FooterPageComponent,
    CarAllComponent,
    ScrollbarAllComponent
  ],
  providers: [
    TransactionService,
    HttpService,
    ObserCarService
  ]
})
export class SharedModule { }
