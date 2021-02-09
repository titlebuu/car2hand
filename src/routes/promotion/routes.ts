import * as express from 'express';
import { Request, Response } from 'express';
import Handler from './handler';

export default class RouteReview {
    public router = express.Router();
    private handler: Handler = new Handler();

    constructor() {
        this.router.get('/api/promotion', (req: Request, res: Response) => {
            this.handler.getPromotion(req, res);
        });
    }
}
