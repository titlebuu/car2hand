
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NongkhaiRoutingModule } from './nongkhai-routing.module';
import { NongkhaiComponent } from './nongkhai.component';
import { SharedModule } from './shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { HttpService } from './shared/services/http.service';
import { BrandService } from './shared/services/brand.service';
import { TransactionService } from './shared/services/transaction.service';
import { PromotionService } from './shared/services/promotion.service';
import { ObserCarService } from './shared/services/obser-car.service';

@NgModule({
  declarations: [NongkhaiComponent],
  imports: [
    CommonModule,
    NongkhaiRoutingModule,
    SharedModule,
    HttpClientModule
  ],
  providers: [
    HttpService,
    BrandService,
    TransactionService,
    PromotionService,
    ObserCarService
  ]
})
export class NongkhaiModule { }
