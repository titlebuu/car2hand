import { Component, OnInit } from '@angular/core';
import { carAttribute, modelsAttribute, brandAttribute } from './../../../../../../../../../src/models/db';
import { Router, ActivatedRoute, NavigationStart, NavigationEnd } from '@angular/router';
import { ROUTE_CAR_VIEW, ROUTE_CAR_ADD } from '../../../car/constants/route-path.constant';
import { HttpService } from './../../../../../shared/services/http.service';
import { BRANCH } from './../../../../../shared/constants/data.constant';
import * as _ from 'lodash';

@Component({
  selector: 'app-car-all-page',
  templateUrl: './car-all-page.component.html',
  styleUrls: ['./car-all-page.component.scss']
})
export class CarAllPageComponent implements OnInit {

  limit: number;
  offset: number;
  urlCurent: string;
  searchStatus = false;
  setIntervalId: any;
  check: any;
  cars: carAttribute[] = [];
  count: number;
  pageFirstText = '<< หน้าแรก';
  pagePreviousText = '<< ก่อนหน้า';
  pageNextText = 'ต่อไป >>';
  pageLastText = 'สุดท้าย >>';
  filter = {
    brandId: '',
    modelsId: '',
    year: '',
    priceStart: '',
    priceEnd: '',
    limit: this.limit,
    offset: 0,
    branch: BRANCH
  };
  itemsDelete: carAttribute;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private httpService: HttpService
  ) {
    this.router.events
      .subscribe(event => {
        if (event instanceof NavigationEnd) {
          this.getCar();
        }
      });
  }

  async ngOnInit() {
    this.getCar();
  }

  getCar() {
    this.limit = 9;
    this.filter.brandId = String(this.route.snapshot.queryParams.brandId || 0);
    this.filter.modelsId = String(this.route.snapshot.queryParams.modelsId || 0);
    this.filter.year = String(this.route.snapshot.queryParams.year || 0);
    this.filter.priceStart = String(this.route.snapshot.queryParams.priceStart || 0);
    this.filter.priceEnd = String(this.route.snapshot.queryParams.priceEnd || 0);
    this.searchStatus = this.route.snapshot.queryParams.search;
    this.filter.limit = this.limit;
    this.filter.branch = BRANCH;
    this.searchCar();
  }

  toDetail(item) {
    this.router.navigate([`${ROUTE_CAR_VIEW}/${item.carId}`]);
  }

  toEdit(item) {
    this.router.navigate([ROUTE_CAR_ADD], {
      queryParams: {
        method: 'edit',
        carId: item.carId
      }
    });
  }

  toDelete(item: carAttribute) {
    this.httpService.delete(`/api/car/` + item.carId).then(res => {
      this.searchCar();
    });
  }

  async searchCar() {
    this.httpService.get(`/api/car/filter`, this.filter).then(res => {
      this.cars = res.rows;
      this.count = res.count;
    });
  }

  pageChanged(event) {
    this.filter.limit = this.limit;
    this.filter.offset = 0;
    if (event.page > 1) {
      this.filter.offset = (event.page - 1) * this.limit;
    }
    this.searchCar();
  }

  scrollToView(): void {
    document.getElementById('catAll').scrollIntoView({ behavior: 'smooth' });
  }

  toAdd() {
    this.router.navigate([ROUTE_CAR_ADD]);
  }

  convertNumber(num) {
    return Number(num);
  }
}
