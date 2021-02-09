import * as express from 'express';
import { Request, Response } from 'express';
import Handler from './handler';

export default class RouteCars {
    public router = express.Router();
    private handler: Handler = new Handler();

    constructor() {
        this.router.get('/api/brand', (req: Request, res: Response) => {
            this.handler.getList(req, res);
        });
    }
}
