import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { IRequestDefault } from './models/util';

@Injectable({
  providedIn: 'root'
})
export class PromotionService {

  constructor(
    private httpService: HttpService
  ) { }

  getPromotion(params: IRequestDefault = {}): Promise<any> {
    return this.httpService.get('/api/promotion', params);
  }
}
