import { Request, Response } from 'express';
import Service from './service';
import { IRequestDefault, IResponseAll } from './../../utils/interface';

export default class Handler {

    service: Service = new Service();

    public getPromotion = async (req: Request, res: Response) => {
        const params: IRequestDefault = req.query;
        const response = await this.service.getPromotion(params);
        res.status(200).send(response);
    }
}