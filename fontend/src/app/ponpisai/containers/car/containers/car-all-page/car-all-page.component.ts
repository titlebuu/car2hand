import { Component, OnInit } from '@angular/core';
import { ROUTE_CAR_VIEW } from '../../constants/route-path.constant';
import { Router, ActivatedRoute } from '@angular/router';
import { carAttribute, modelsAttribute, brandAttribute } from './../../../../../../../../src/models/db';

@Component({
  selector: 'app-car-all-page',
  templateUrl: './car-all-page.component.html',
  styleUrls: ['./car-all-page.component.scss']
})
export class CarAllPageComponent implements OnInit {
  cars: any;
  formBrand: brandAttribute['brandId'];
  formModels: modelsAttribute['modelsId'];
  formYear: carAttribute['years'];
  formPriceStart: any;
  formPriceEnd: any;

  limit: number;
  offset: number;


  constructor(
    private router: Router,
    private route: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    // this.scrollToView();
  }

  async searchAll() {
  }

  toDetail(item) {
    this.router.navigate([`${ROUTE_CAR_VIEW}/${item.id}`]);
  }

  scrollToView(): void {
    document.getElementById('catAll').scrollIntoView({ behavior: 'smooth' });
  }
}
