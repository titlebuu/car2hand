import * as express from 'express';
import { Request, Response } from 'express';
import Handler from './handler';

export default class RouteReview {
    public router = express.Router();
    private handler: Handler = new Handler();

    constructor() {
        this.router.get('/api/review/admin', (req: Request, res: Response) => {
            this.handler.getVideoReview(req, res);
        });
        this.router.get('/api/review/customer', (req: Request, res: Response) => {
            this.handler.getImageReview(req, res);
        });
    }
}
