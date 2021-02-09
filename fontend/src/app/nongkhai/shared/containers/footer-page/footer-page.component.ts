import { Component, OnInit } from '@angular/core';
import { LINK_MESSANGER } from '../../constants/data.constant';
import { Router } from '@angular/router';
import { HttpService } from './../../services/http.service';
import { brandAttribute, modelsAttribute } from '../../../../../../../src/models/db';
import { LINK_NONGKHAI } from './../../../shared/constants/data.constant';

@Component({
  selector: 'app-footer',
  templateUrl: './footer-page.component.html',
  styleUrls: ['./footer-page.component.scss']
})
export class FooterPageComponent implements OnInit {
  brand: Array<brandAttribute> = [];

  constructor(
    private router: Router,
    private httpService: HttpService
  ) { }

  ngOnInit(): void {
    this.getBrand();
  }

  async getBrand() {
    this.httpService.get('api/brand', {}).then((res: Array<brandAttribute>) => {
      res.forEach((elements: brandAttribute) => {
        this.brand.push(elements);
      });
    });
  }

  toFacebook1() {
    window.open('https://web.facebook.com/ruaysombatcar/?epa=SEARCH_BOX', '_blank');
  }

  toFacebook2() {
    window.open('https://www.facebook.com/ruaysombat/', '_blank');
  }

  searchByBrand(brand): void {
    const params = {
      brandId: String(brand),
      modelsId: 0,
      year: 0,
      priceStart: 0,
      priceEnd: 0,
      limit: 9,
      offset: 0,
      search: true,
      timestime: new Date()
    };
    this.routeToCarPage(params);
  }

  routeToCarPage(params) {
    this.router.navigate(['/car/list'], { queryParams: params });
  }

  toMessenger() {
    window.open(LINK_MESSANGER, '_blank');
  }

  toAdmin() {
    this.router.navigate([`/${LINK_NONGKHAI}/admin`]);
  }
}
