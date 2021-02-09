import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from './../../../shared/shared.module';
import { CarRoutingModule } from './car-routing.module';
import { CarAllPageComponent } from './containers/car-all-page/car-all-page.component';
import { CarViewPageComponent } from './containers/car-view-page/car-view-page.component';
import { CarEditPageComponent } from './containers/car-edit-page/car-edit-page.component';
import { CarAddPageComponent } from './containers/car-add-page/car-add-page.component';

import { ModalModule } from 'ngx-bootstrap/modal';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    CarAllPageComponent,
    CarViewPageComponent,
    CarEditPageComponent,
    CarAddPageComponent
  ],
  imports: [
    CommonModule,
    CarRoutingModule,
    SharedModule,
    CarouselModule,
    ModalModule.forRoot(),
    PaginationModule,
    FormsModule
  ]
})
export class CarModule { }
