import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomePageComponent } from './containers/home-page/home-page.component';
import { HttpService } from './../../shared/services/http.service';

@NgModule({
  declarations: [HomePageComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
  ],
  providers: [
    HttpService
  ]
  // schemas: [
  //   CUSTOM_ELEMENTS_SCHEMA
  // ]
})
export class HomeModule { }
