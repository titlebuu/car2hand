import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { IRequestDefault } from './models/util';

@Injectable({
  providedIn: 'root'
})
export class BrandService {

  constructor(
    private httpService: HttpService
  ) { }

  get(): Promise<any> {
    return this.httpService.get('api/brand', {});
  }
}
