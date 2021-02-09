import * as express from 'express';
import { Request, Response } from 'express';
import Handler from './handler';

export default class RouteReview {
    public router = express.Router();
    private handler: Handler = new Handler();

    constructor() {
        this.router.post('/api/mailer', (req: Request, res: Response) => {
            this.handler.mailer(req, res);
        });
    }
}