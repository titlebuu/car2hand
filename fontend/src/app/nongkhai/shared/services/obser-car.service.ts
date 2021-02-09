import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { carAttribute } from '../../../../../../src/models/db';
import { ObserCarName, IRequestCar } from './models/util';
import { IResponse } from './models/util';
@Injectable({
  providedIn: 'root'
})
export class ObserCarService {
  obserCarName: ObserCarName = new ObserCarName();
  // carItem: Array<carAttribute>;
  carItem: IResponse;
  status = false;

  constructor(private httpClient: HttpClient) { }

  public setHeader = (): HttpHeaders => {
    return new HttpHeaders({
      'Content-Type': 'application/json',
      authorization: 'token',
    });
  }

  public setCar = (query: any): Promise<any> => {
    const httpOptions = {
      headers: this.setHeader(),
      params: query
    };
    return this.httpClient.get('/api/car/filter', httpOptions).toPromise()
      .then((res: IResponse) => {
        // Array<carAttribute>
        this.carItem = res;
        this.compare(res);
        return res;
      });
  }

  compare(res): void {
    if (JSON.stringify(res) !== localStorage.getItem(this.obserCarName.name)) {
      localStorage.removeItem(this.obserCarName.name);
      localStorage.setItem(this.obserCarName.name, JSON.stringify(res));
    }
  }
}

