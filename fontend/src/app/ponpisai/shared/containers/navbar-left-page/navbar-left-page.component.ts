import { Component, OnInit } from '@angular/core';
import { BRANCH, PRICE_START, PRICE_END, YEAR, LINK_PHONPHISAI } from '../../constants/data.constant';
import { brandAttribute, modelsAttribute } from '../../../../../../../src/models/db';
import { BrandService } from '../../services/brand.service';
import { HttpService } from '../../services/http.service';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-navbar-left',
  templateUrl: './navbar-left-page.component.html',
  styleUrls: ['./navbar-left-page.component.scss']
})
export class NavbarLeftPageComponent implements OnInit {

  date = new Date();
  year = YEAR;
  priceStart = PRICE_START;
  priceEnd = PRICE_END;

  logoBrand: Array<brandAttribute>;
  brand: Array<brandAttribute>;
  models: Array<modelsAttribute>;
  formBrand: brandAttribute['brandId'] = 0;
  formModels: modelsAttribute['brandId'] = 0;
  formYear = '0';
  formPriceStart = '0';
  formPriceEnd = '0';
  formBranch = '';

  constructor(
    private router: Router,
    private httpService: HttpService,
  ) { }

  async ngOnInit() {
    this.getBrand();
    this.defultBrand();
    this.defultModels();
  }

  async getBrand() {
    this.httpService.get('api/brand', {}).then((res: Array<brandAttribute>) => {
      this.logoBrand = res;
      res.forEach((elements: brandAttribute) => {
        this.brand.push(elements);
      });
    });
  }

  async changeCar() {
    this.formModels = 0;
    let params = this.formBrand;
    if (this.formBrand === 0) { params = null; }

    this.httpService.get('/api/models/searchByBrand', { brandId: params }).then((res: Array<modelsAttribute>) => {
      this.defultModels();
      res.forEach((elements: modelsAttribute) => {
        this.models.push(elements);
      });
    });
  }

  defultBrand(): void {
    this.brand = [{
      brandId: 0,
      brandNameEn: 'เลือก',
      brandNameTh: 'เลือก',
      createdAt: this.date,
      updatedAt: this.date
    }];
  }

  defultModels(): void {
    this.models = [{
      modelsId: 0,
      modelsNameEn: 'เลือก',
      modelsNameTh: 'เลือก',
      createdAt: this.date,
      updatedAt: this.date,
      brandId: null,
    }];
  }

  sortBy(prop: string) {
    return this.year.sort((a, b) => a[prop] < b[prop] ? 1 : a[prop] === b[prop] ? 0 : -1);
  }

  search(): void {
    const params = {
      brandId: String(this.formBrand),
      modelsId: String(this.formModels),
      year: String(this.formYear),
      priceStart: String(this.formPriceStart),
      priceEnd: String(this.formPriceEnd),
      branch: BRANCH,
      limit: 9,
      offset: 0,
      search: true,
      timestime: new Date()
    };
    this.routeToCarPage(params);
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
    this.router.navigate([`${LINK_PHONPHISAI}/car/list`], { queryParams: params });
  }

  clear(): void {
    this.formBrand = 0;
    this.formModels = 0;
    this.formYear = '0';
    this.formPriceStart = '0';
    this.formPriceEnd = '0';
  }

  toFacebook() {
    window.open('https://web.facebook.com/ruaysombatcar/?epa=SEARCH_BOX', '_blank');
  }

  toPromotion() {
    this.router.navigate(['/promotion']);
  }

  toAbout() {
    this.router.navigate(['/about']);
  }
}
