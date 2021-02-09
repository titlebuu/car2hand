import { Component, OnInit, AfterViewInit, Injectable, ViewChild, ElementRef } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { BRANCH, YEAR } from './../../../../../shared/constants/data.constant';
import * as moment from 'moment';
import * as _ from 'lodash';
import { Location } from '@angular/common';
import { v4 as uuid } from 'uuid';
import { carAttribute, modelsAttribute, brandAttribute } from './../../../../../../../../../src/models/db';
import { IFlie } from './../../../../../../../../../src/routes/file/interface';
import { HttpService } from './../../../../../shared/services/http.service';
import { ROUTE_CAR_ALL } from './../../constants/route-path.constant';

@Component({
  selector: 'app-car-add-page',
  templateUrl: './car-add-page.component.html',
  styleUrls: ['./car-add-page.component.scss']
})
export class CarAddPageComponent implements AfterViewInit, OnInit {
  @ViewChild('myInput')
  myInputVariable: ElementRef;
  formNews: FormGroup;
  id: string;
  msg: string;
  file: any;
  uploadFile: Array<IFlie> = [];
  fileArray: any;
  uploadFileArray: Array<IFlie> = [];
  method: any;
  title: any;
  title2: any;
  desc: any;
  logoBrand: Array<brandAttribute>;
  branch = BRANCH;
  brand: Array<brandAttribute>;
  models: Array<modelsAttribute>;
  brandId: brandAttribute['brandId'] = 0;
  modelsId: brandAttribute['brandId'] = 0;
  carName: string;
  price: 0;
  condition: string;
  description: string;
  pathShow: string;
  createdBy: string;
  updatedBy: string;
  status: string;
  years = moment(new Date()).format('YYYY');
  size: string;
  gear = 'อัตโนมัติ';
  mileage: string;
  color: string;
  numberPlate: string;
  downPayment: string;
  monthPayment: string;
  timePayment: string;
  promotionId = 'PO000001';

  date = new Date();
  year = YEAR;
  modelsAdd: string;
  tempUploadFile: Array<IFlie> = [];
  tempUploadFileStatus = false;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private httpService: HttpService,
    private location: Location
  ) { }

  ngOnInit() {
    const dataQuery = _.cloneDeep(this.route.snapshot.queryParams);
    this.method = dataQuery.method;
    this.id = dataQuery.carId ? dataQuery.carId : uuid();
    this.getBrand();
    this.defultBrand();
    this.defultModels();
    this.timePayment = '84';
    this.setParameter();
  }

  ngAfterViewInit() {
  }

  async setParameter() {
    if (this.method === 'edit') {
      this.uploadFile = [];
      this.uploadFileArray = [];
      const respCar = await this.httpService.get(`/api/car/getById/${this.id}`);
      const respModels = await this.httpService.get(`/api/models`, { modelsId: respCar.car.modelsId });
      if (respCar.car) {
        this.brandId = respModels[0].brandId;
        this.modelsId = respCar.car.modelsId;
        this.carName = respCar.car.carName;
        this.price = respCar.car.price;
        this.condition = respCar.car.condition;
        this.description = respCar.car.description;
        this.status = respCar.car.status;
        this.years = respCar.car.years;
        this.size = respCar.car.size;
        this.gear = respCar.car.gear;
        this.mileage = respCar.car.mileage;
        this.color = respCar.car.color;
        this.numberPlate = respCar.car.numberPlate;
        this.downPayment = respCar.car.downPayment;
        this.monthPayment = respCar.car.monthPayment;
        this.timePayment = respCar.car.timePayment;
        this.promotionId = respCar.car.promotionId;
        this.changeCar();
        this.modelsId = respCar.car.modelsId;
        this.branch = respCar.car.branch || BRANCH;
      }
      if (respCar.files && respCar.files.length) {
        respCar.files.forEach(element => {
          element.file = element.path;
          element.method = 'edit';
          if (element.status === 'D') {
            this.uploadFile.push(element);
          } else {
            this.uploadFileArray.push(element);
          }
        });
      }
    }
  }

  getBrand() {
    this.httpService.get(`api/brand`, {}).then((res: Array<brandAttribute>) => {
      res.forEach((elements: brandAttribute) => {
        this.brand.push(elements);
      });
    });
  }

  changeCar() {
    this.defultModels();
    this.modelsId = 0;
    let params = this.brandId;
    if (this.brandId === 0) { params = null; }
    this.httpService.get('/api/models/searchByBrand', { brandId: params }).then((res: Array<modelsAttribute>) => {
      res.forEach((elements: modelsAttribute) => {
        this.models.push(elements);
      });
    });
  }

  defultBrand(): void {
    this.brand = [{
      brandId: 0,
      brandNameEn: 'เลือกยีห้อ',
      brandNameTh: 'เลือกยีห้อ',
      createdAt: this.date,
      updatedAt: this.date
    }];
  }

  defultModels(): void {
    this.models = [{
      modelsId: 0,
      modelsNameEn: 'เลือกรุ่น',
      modelsNameTh: 'เลือกรุ่น',
      createdAt: this.date,
      updatedAt: this.date,
      brandId: null,
    }];
  }

  async changeListener($event) {
    try {

      // เซ็ตไฟล์เก่า
      if (this.uploadFile && this.uploadFile.length > 0) {
        this.tempUploadFile = _.cloneDeep(this.uploadFile);
        this.tempUploadFileStatus = true;
      } else {
        this.tempUploadFileStatus = true;
      }

      const res = await this.myUploader($event.target);
      for (let i = 0; i < res.length; i++) {
        this.uploadFile = [{
          fileId: 0,
          id: '',
          path: '',
          size: $event.target.files[i].size,
          name: $event.target.files[i].name,
          type: 'cars',
          status: 'D',
          file: res[i] ? res[i] : this.uploadFile[i],
          method: 'add'
        }];
      }
      this.file = '';
      return true;
    } catch (error) {
      this.myInputVariable.nativeElement.value = '';
    }
  }

  async changeListenerArray($event) {
    try {
      const res = await this.myUploader($event.target);
      for (let i = 0; i < res.length; i++) {
        this.uploadFileArray.push({
          fileId: 0,
          id: '',
          path: '',
          size: $event.target.files[i].size,
          name: $event.target.files[i].name,
          type: 'cars',
          status: 'Y',
          file: res[i] ? res[i] : this.uploadFileArray[i],
          method: 'add'
        });
      }
      this.fileArray = '';
      return true;
    } catch (error) {
      this.myInputVariable.nativeElement.value = '';
    }
  }

  async myUploader(inputValue: any): Promise<any> {
    try {
      const promises = [];
      // tslint:disable-next-line:prefer-for-of
      for (let i = 0; i < inputValue.files.length; i++) {
        const file: File = inputValue.files[i];

        const type = file.type.split('/'); // CHECK TYPE
        if (type[0] !== 'image') {
          this.msg = 'อัพโหลดได้เฉพาะรูปภาพเท่านั้น';
          throw this.msg;
        }

        if (file.size > 20480000) { // 20 MB
          this.msg = 'ไฟล์เกินขนาด 20 MB';
          throw this.msg;
        }

        promises.push(readBase64(file));
      }
      const myReader: FileReader = new FileReader();
      return await Promise.all(promises);
    } catch (error) {
      throw error;
    }
  }

  setTuch() {
    const controls = this.formNews.controls;
    _.forEach(controls, control => {
      control.markAsTouched({ onlySelf: true });
      control.markAsDirty({ onlySelf: true });
    });

  }

  async submit() {
    try {
      this.msg = 'loading..';

      // VALIDATE
      if (
        this.brandId < 1 ||
        this.modelsId < 1 ||
        !this.carName ||
        !this.price ||
        // !this.condition ||
        // !this.description ||
        // !this.status ||
        !this.years ||
        !this.size ||
        !this.gear ||
        !this.mileage ||
        !this.color ||
        !this.numberPlate ||
        !this.downPayment ||
        !this.monthPayment ||
        !this.timePayment
        // !this.promotionId ||
      ) {
        // tslint:disable-next-line:no-string-throw
        throw 'กรุณากรอกข้อมูลให้ครบถ้วน';
      }

      if (this.uploadFile.length < 1) {
        // tslint:disable-next-line:no-string-throw
        throw 'กรุณาอัพโหลดรูปภาพต้นแบบ';
      }
      if (this.uploadFileArray.length < 1) {
        // tslint:disable-next-line:no-string-throw
        throw 'กรุณาอัพโหลดรูปภาพทั้งหมด';
      }

      if (this.method === 'edit') {
        await this.updSubmit();
      } else {
        await this.addSubmit();
      }
      this.msg = 'success';
      this.router.navigate([ROUTE_CAR_ALL]);
    } catch (error) {
      this.msg = JSON.stringify(error);
    }
  }

  async addSubmit(): Promise<boolean> {
    try {
      const reqParamsCar: any = {
        modelsId: this.modelsId,
        carName: this.carName,
        price: this.price,
        condition: this.condition,
        description: this.description,
        status: 'Y',
        years: Number(this.years),
        size: this.size,
        gear: this.gear,
        mileage: this.mileage,
        color: this.color,
        numberPlate: this.numberPlate,
        downPayment: this.downPayment,
        monthPayment: this.monthPayment,
        timePayment: this.timePayment,
        promotionId: this.promotionId,
        branch: this.branch
      };
      const resParamsCar = await this.httpService.post(`/api/car`, reqParamsCar);

      // อัพโหลดไฟล์ defualt
      if (this.uploadFile && this.uploadFile.length > 0) {
        // tslint:disable-next-line:forin
        for (const i in this.uploadFile) {
          const element = this.uploadFile[i];
          element.id = resParamsCar.carId;
          element.modelsId = resParamsCar.modelsId;
          const respFile = await this.httpService.post(`/api/file`, element);
          await this.httpService.put(`/api/car/${resParamsCar.carId}`, {
            modelsId: resParamsCar.modelsId,
            pathShow: respFile.resultData.path
          });
        }
      }
      // อัพโหลดไฟล์ ทั้งหมด
      if (this.uploadFileArray && this.uploadFileArray.length > 0) {
        // tslint:disable-next-line:forin
        for (const i in this.uploadFileArray) {
          const element = this.uploadFileArray[i];
          element.id = resParamsCar.carId;
          element.modelsId = resParamsCar.modelsId;
          await this.httpService.post(`/api/file`, element);
        }
      }
      return true;
    } catch (error) {
      this.msg = error;
    }
  }

  async updSubmit(): Promise<boolean> {
    try {
      const reqParamsCar: any = {
        modelsId: this.modelsId,
        carName: this.carName,
        price: this.price,
        condition: this.condition,
        description: this.description,
        status: 'Y',
        years: Number(this.years),
        size: this.size,
        gear: this.gear,
        mileage: this.mileage,
        color: this.color,
        numberPlate: this.numberPlate,
        downPayment: this.downPayment,
        monthPayment: this.monthPayment,
        timePayment: this.timePayment,
        promotionId: this.promotionId,
        branch: this.branch
      };
      await this.httpService.put(`/api/car/${this.id}`, reqParamsCar);
      const resById = await this.httpService.get(`/api/car/getById/${this.id}`);
      const resParamsCar = resById.car;

      if (this.tempUploadFileStatus) {

        // อัพโหลดไฟล์ defualt
        if (this.uploadFile && this.uploadFile.length > 0) {
          // tslint:disable-next-line:forin
          for (const i in this.uploadFile) {
            const element = this.uploadFile[i];
            element.id = resParamsCar.carId;
            element.modelsId = resParamsCar.modelsId;
            element.status = 'D';
            const respFile = await this.httpService.post(`/api/file`, element);
            await this.httpService.put(`/api/car/${resParamsCar.carId}`, {
              modelsId: resParamsCar.modelsId,
              pathShow: respFile.resultData.path
            });
          }
        }

        // ลบไฟล์ temp
        if (this.tempUploadFile && this.tempUploadFile.length > 0) {
          // tslint:disable-next-line:forin
          for (const i in this.tempUploadFile) {
            const element = this.tempUploadFile[i];
            await this.httpService.delete(`/api/file/${element.fileId}`);
          }
        }
      }

      // อัพโหลดไฟล์ ทั้งหมด
      if (this.uploadFileArray && this.uploadFileArray.length > 0) {
        // tslint:disable-next-line:forin
        for (const i in this.uploadFileArray) {
          const element = this.uploadFileArray[i];
          if (element.method === 'add') {
            element.id = resParamsCar.carId;
            element.modelsId = resParamsCar.modelsId;
            await this.httpService.post(`/api/file`, element);
          } else if (element.method === 'delete') {
            await this.httpService.delete(`/api/file/${element.fileId}`);
          } else {
          }
        }
      }
      return true;
    } catch (error) {
      this.msg = error;
    }
  }

  async submitModal() {
    try {
      if (this.brandId !== 0 && this.modelsAdd) {
        await this.httpService.post(`/api/models`, {
          brandId: this.brandId,
          modelsNameEn: this.modelsAdd,
          modelsNameTh: this.modelsAdd,
        });
        this.changeCar();
      }
      // this.msg = 'success';
    } catch (error) {
      // this.msg = JSON.stringify(error);
    }
  }

  numberOnly(event): boolean {
    const rexs = new RegExp(/^[0-9+]+$/);
    if (!rexs.test(event.key)) {
      return false;
    }
    return true;
  }

  clearImage() {
    this.uploadFileArray = [];
  }

  delArray(i: number) {
    if (this.uploadFileArray[i]) {
      this.uploadFileArray[i].method = 'delete';
    }
  }
}

function readBase64(file): Promise<any> {
  const reader = new FileReader();
  const future = new Promise((resolve, reject) => {
    reader.addEventListener('load', () => {
      resolve(reader.result);
    },
      false
    );
    reader.addEventListener('error', (event) => {
      reject(event);
    }, false
    );

    reader.readAsDataURL(file);
  });
  return future;
}
