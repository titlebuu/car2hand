import * as express from 'express';
import { Request, Response } from 'express';
import Handler from './handler';

export default class RouteModels {
    public router = express.Router();
    private handler: Handler = new Handler();

    constructor() {

        this.router.get('/api/models', (req: Request, res: Response) => {
            this.handler.getList(req, res);
        });

        this.router.get('/api/models/searchByBrand', (req: Request, res: Response) => {
            this.handler.getModelsByBrand(req, res);
        });

        this.router.post('/api/models', (req: Request, res: Response) => {
            this.handler.postModels(req, res);
        });

        this.router.put('/api/models/:modelsId', (req: Request, res: Response) => {
            this.handler.putModels(req, res);
        });

        this.router.delete('/api/models/:modelsId', (req: Request, res: Response) => {
            this.handler.deleteModels(req, res);
        });

    }
}
