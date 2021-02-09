import { Request, Response } from 'express';
import { models, sequelize } from './../../models/index';
import { IRequestDefault, IResponseAll } from './../../utils/interface';
import { ICarWhere } from './interface';
import { carAttribute } from "./../../models/db";
import Service from './service';
import { Utils } from "./../../utils/utils";
import { CResponse } from '../../utils/response';

export default class Handler {
  service: Service = new Service();
  utils: Utils = new Utils();
  RESP: CResponse = new CResponse();

  public getList = async (req: Request, res: Response) => {
    const params: IRequestDefault = req.query;
    const response = await this.service.getAll(params);
    res.status(200).send(response);
  }

  public getById = async (req: Request, res: Response) => {
    const params: ICarWhere = req.params;
    if (req.query.status) params.status = req.query.status;
    const response = await this.service.getById(params);
    res.status(200).send(response);
  }

  public searchFilter = async (req: Request, res: Response) => {
    const params: any = req.query;
    const response = await this.service.sqlFilter(params);
    res.status(200).send(response);
  }

  public postCar = async (req: Request, res: Response) => {
    const carId: carAttribute['carId'] = await this.utils.runCodeString('car', 'carId', 'CAR', 6);
    const params: carAttribute = req.body;
    params.carId = carId;
    const response = await this.service.postCar(params);
    res.status(200).send(response);
  }

  public putCar = async (req: Request, res: Response) => {
    const params: carAttribute['carId'] = req.params;
    const body: carAttribute = req.body;
    const response = await this.service.putCar(params, body);
    res.status(200).send({ success: response });
  }

  public deleteCar = async (req: Request, res: Response) => {
    const params: any = req.params;
    const response = await this.service.deleteFileAll(params);
    this.RESP.response(res, '20000', [], response);
  }

}
