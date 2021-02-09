import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DATA_CARS, LINK_NONGKHAI, BRANCH } from './../../../../shared/constants/data.constant';
import { BrandService } from '../../../../shared/services/brand.service';
import { ROUTE_CAR_MAIN, ROUTE_CAR_VIEW } from './../../../car/constants/route-path.constant';
import { brandAttribute } from '../../../../../../../../src/models/db';
import { IResponse } from './../../../../shared/services/models/util';
import { HttpService } from './../../../../shared/services/http.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  cars: Array<object>;
  brand: Array<brandAttribute>;

  constructor(
    private brandService: BrandService,
    private router: Router,
    private httpService: HttpService
  ) { }

  ngOnInit(): void {
    this.cars = DATA_CARS;
    this.getCar();
    this.getBrand();
  }

  getCar() {
    // this.promotionService.getPromotion({ limit: 9, offset: 0 }).then((res: IResponse) => {
    //   this.cars = res.rows;
    // });

    this.httpService.get(`/api/car/filter`, {
      branch: BRANCH,
      limit: 9,
      offset: 0,
      brandId: 0,
      modelsId: 0,
      year: 0,
      priceStart: 0,
      priceEnd: 0,
      order: [['updatedAt', 'desc']]
    }).then(res => {
      this.cars = res.rows;
    });
  }

  async getBrand() {
    this.brandService.get().then((res: any) => {
      this.brand = res;
    });
  }

  toCarDetail(item) {
    this.router.navigate([`/${LINK_NONGKHAI}/car${ROUTE_CAR_VIEW}/${item.carId}`]);
  }

  convertNumber(num) {
    return Number(num);
  }
}
