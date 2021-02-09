import { Request, Response } from 'express';
import { models } from '../../models/index';
import Service from "./service";
import { modelsAttribute } from "./../../models/db";
import { Utils } from "./../../utils/utils";
export default class Handler {
  service: Service = new Service();
  utils: Utils = new Utils();


  public getList = async (req: Request, res: Response) => {
    let params = {}
    if (req.query) params = req.query;
    let response = await models['models'].findAll({ where: params });
    res.status(200).send(response);
  }

  public getModelsByBrand = async (req: Request, res: Response) => {
    let response = await models['models'].findAll({ where: req.query });
    res.status(200).send(response);
  }

  public postModels = async (req: Request, res: Response) => {
    const modelsId: modelsAttribute['modelsId'] = await this.utils.runNumber('models', 'modelsId')
    const params: modelsAttribute = req.body;
    params.modelsId = modelsId;
    const response = await this.service.postModels(params);
    res.status(200).send(response);
  }

  public putModels = async (req: Request, res: Response) => {
    const params: modelsAttribute['modelsId'] = req.params;
    const body: modelsAttribute = req.body;
    const response = await this.service.putModels(params, body);
    res.status(200).send({ success: response });
  }

  public deleteModels = async (req: Request, res: Response) => {
    const params: modelsAttribute['modelsId'] = req.params;
    const response = await this.service.deleteModels(params);
    res.status(200).send(response);
  }
}
