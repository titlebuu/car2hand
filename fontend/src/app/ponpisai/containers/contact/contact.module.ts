import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ContactRoutingModule } from './contact-routing.module';
import { ContactViewPageComponent } from './containers/contact-view-page/contact-view-page.component';
import { HttpService } from './../../shared/services/http.service';

@NgModule({
  declarations: [ContactViewPageComponent],
  imports: [
    CommonModule,
    ContactRoutingModule,
    FormsModule
  ],
  providers: [
    HttpService
  ]
})
export class ContactModule { }
