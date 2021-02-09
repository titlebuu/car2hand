import * as express from 'express';
import { Request, Response } from 'express';
import Handler from './handler';

export default class RouteBrand {
    public router = express.Router();
    private handler: Handler = new Handler();

    constructor() {

        this.router.post('/api/file', (req: Request, res: Response) => {
            this.handler.postFile(req, res);
        });

        this.router.delete('/api/file/:fileId', (req: Request, res: Response) => {
            this.handler.deleteFile(req, res);
        });
    }
}