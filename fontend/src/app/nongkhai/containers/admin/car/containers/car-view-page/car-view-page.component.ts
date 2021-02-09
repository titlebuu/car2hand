import { Component, OnInit, TemplateRef } from '@angular/core';
import { DATA_CAR_TOP } from './../../../../../shared/constants/data.constant';
import { ROUTE_CAR_VIEW } from '../../constants/route-path.constant';
import { HttpService } from './../../../../../shared/services/http.service';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { contentTrigger, aunjaiTrigger } from './../../../../../shared/animate';
import { BRANCH, LINK_NONGKHAI } from './../../../../../shared/constants/data.constant';
@Component({
  selector: 'app-car-view-page',
  templateUrl: './car-view-page.component.html',
  styleUrls: ['./car-view-page.component.scss'],
  animations: [contentTrigger, aunjaiTrigger]
})
export class CarViewPageComponent implements OnInit {
  cars: any;
  carsExlample: any;
  modalRef: BsModalRef;
  modalImg: string;
  brandNameTh: string;
  modelsNameTh: string;
  itemsPerSlide = 5;
  singleSlideOffset = true;
  noWrap = true;

  constructor(
    private router: Router,
    private httpService: HttpService,
    private activatedRoute: ActivatedRoute,
    private modalService: BsModalService
  ) { }

  async ngOnInit() {
    const id = this.activatedRoute.snapshot.params.id;
    this.cars = await this.httpService.get(`/api/car/getById/${id}`);

    const resModels = await this.httpService.get(`/api/models`, { modelsId: this.cars.car.modelsId });
    const resBrand = await this.httpService.get(`/api/brand`, { brandId: resModels[0].brandId });
    this.modelsNameTh = resModels[0].modelsNameEn;
    this.brandNameTh = resBrand[0].brandNameEn;

    // ค้นหารุ่นเดียวกัน
    this.carsExlample = await this.httpService.get(`/api/car/filter`, {
      branch: BRANCH,
      limit: 3,
      offset: 0,
      brandId: resBrand[0].brandId,
      modelsId: this.cars.car.modelsId,
      year: 0,
      priceStart: 0,
      priceEnd: 0,
      order: [['updatedAt', 'desc']]
    });

    // ค้นหายีห้อเดียวกัน
    if (this.carsExlample.count && this.carsExlample.count < 3) {
      this.carsExlample = await this.httpService.get(`/api/car/filter`, {
        branch: BRANCH,
        limit: 3,
        offset: 0,
        brandId: resBrand[0].brandId,
        modelsId: 0,
        year: 0,
        priceStart: 0,
        priceEnd: 0,
        order: [['updatedAt', 'desc']]
      });
    }

    // ค้นหารถทั้งหมดของสาขา
    if (this.carsExlample.count && this.carsExlample.count < 3) {
      this.carsExlample = await this.httpService.get(`/api/car/filter`, {
        branch: BRANCH,
        limit: 3,
        offset: 0,
        brandId: 0,
        modelsId: 0,
        year: 0,
        priceStart: 0,
        priceEnd: 0,
        order: [['updatedAt', 'desc']]
      });
    }

    this.scrollToViewInit();
  }

  openModal(template: TemplateRef<any>, img) {
    // this.modalImg = '';
    // this.modalRef = this.modalService.show(template);
    // this.modalImg = img;
  }

  toDetail(item) {
    this.router.navigate([`/${LINK_NONGKHAI}${ROUTE_CAR_VIEW}/${item.carId}`]);
    this.httpService.get(`/api/car/getById/${item.carId}`).then(res => {
      this.cars = res;
    });
    this.scrollToView();
  }

  scrollToView(): void {
    document.getElementById('carouselExampleIndicators').scrollIntoView({ behavior: 'smooth' });
  }

  scrollToViewInit(): void {
    if (window.innerWidth < 991) {
      window.scroll({
        top: 825,
        behavior: 'smooth'
      });
    }
  }

  convertNumber(num) {
    return Number(num);
  }
}
