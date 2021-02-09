import { Request, Response } from 'express';
import Service from './service';
import { filesAttribute } from '../../models/db'
import { Utils } from "../../utils/utils";
import { IFlie, IFileId } from './interface';
import { CResponse } from '../../utils/response';

export default class Handler {
  service: Service = new Service();
  utils: Utils = new Utils();
  RESP: CResponse = new CResponse();

  public postFile = async (req: Request, res: Response) => {
    try {
      const params: IFlie = req.body;
      const resp = await this.service.getBrandAndModels(params);      // GET MODELS AND BRAND
      params.brand = resp.brandNameEn;                                // SET BRAND
      params.models = resp.modelsNameEn;                              // SET MODELS
      params.fileId = await this.utils.runNumber('files', 'fileId');  // RUNNING FILEID
      params.path = await this.service.uploads(params);               // UPLOAD FILE
      const response = await this.service.postFile(params);
      this.RESP.response(res, '20000', response);
    } catch (error) {
      this.RESP.response(res, '50000', [], error);
    }
  }

  public deleteFile = async (req: Request, res: Response) => {
    try {
      const params: IFileId = req.params;
      const response = await this.service.deleteFile(params);
      this.RESP.response(res, '20000', [], response);
    } catch (error) {
      this.RESP.response(res, '50000', [], error);
    }
  }

}
