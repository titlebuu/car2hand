import { Request, Response } from 'express';
import { IResult } from './../../utils/interface';
import Service from './service';

export default class Handler {

    service: Service = new Service();

    public mailer = async (req: Request, res: Response) => {
        let resp: IResult = {};
        const params: any = req.body;
        this.service.mailer(params)
            .then((response) => {
                resp.resultCode = 20000;
                resp.resultDesceiption = 'ส่งข้อมูลเรียบร้อย ทางเราจะติดต่อกลับให้เร็วที่สุด';
                res.status(200).send(resp);
            }).catch((err) => {
                resp.resultCode = 50000;
                resp.resultDesceiption = err;
                res.status(500).send(resp);
            });
    }
}