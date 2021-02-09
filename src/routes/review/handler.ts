import { Request, Response } from 'express';
import { IRequestReview } from './interface';
import Service from './service';

export default class Handler {

    service: Service = new Service();

    public getVideoReview = async (req: Request, res: Response) => {
        const rarams: IRequestReview = req.query;
        const response = await this.service.getReviewVideo(rarams);
        res.status(200).send(response);
    }
    public getImageReview = async (req: Request, res: Response) => {
        const rarams: IRequestReview = req.query;
        const response = await this.service.getReviewImage(rarams);
        res.status(200).send(response);
    }
}