import { Component, OnInit, OnDestroy } from '@angular/core';
import { carAttribute, modelsAttribute, brandAttribute } from '../../../../../../../src/models/db';
import { ObserCarName } from '../../services/models/util';
import { ObserCarService } from './../../services/obser-car.service';
import { Router, ActivatedRoute, NavigationStart, NavigationEnd } from '@angular/router';
import { ROUTE_CAR_MAIN, ROUTE_CAR_VIEW } from './../../../containers/car/constants/route-path.constant';
import { HttpService } from '../../services/http.service';
import { BRANCH, LINK_PHONPHISAI } from './../../constants/data.constant';
import * as _ from 'lodash';

@Component({
  selector: 'app-car-all',
  templateUrl: './car-all.component.html',
  styleUrls: ['./car-all.component.scss']
})
export class CarAllComponent implements OnInit {

  limit: number;
  offset: number;
  urlCurent: string;
  searchStatus = false;
  obserCarName: ObserCarName = new ObserCarName();
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
    // this.getCar();
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
    this.searchCar();
  }

  toDetail(item) {
    this.router.navigate([`/${LINK_PHONPHISAI}${ROUTE_CAR_MAIN}${ROUTE_CAR_VIEW}/${item.carId}`]);
  }

  async searchCar() {
    this.filter.branch = BRANCH;
    this.httpService.get(`/api/car/filter`, this.filter).then(res => {
      this.cars = res.rows;
      this.count = res.count;
      // tslint:disable-next-line:align
      this.scrollToView();
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
    if (document.getElementById('catAll')) {
      document.getElementById('catAll').scrollIntoView({ behavior: 'smooth' });
    }
  }

  convertNumber(num) {
    return Number(num);
  }
}
