import { Injectable } from '@angular/core';
import { HttpService } from '../../shared/services/http.service';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  constructor(
    private http: HttpService
  ) { }

  public getCar(params: any = {}): Promise<any> {
    return this.http.get('/api/car', params);
  }
}
