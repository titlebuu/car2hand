import * as express from 'express';
import { Request, Response } from 'express';
import Handler from './handler';

export default class RouteBrand {
    public router = express.Router();
    private handler: Handler = new Handler();

    constructor() {

        this.router.get('/api/car', (req: Request, res: Response) => {
            this.handler.getList(req, res);
        });

        this.router.get('/api/car/getById/:carId', (req: Request, res: Response) => {
            this.handler.getById(req, res);
        });

        this.router.get('/api/car/filter', (req: Request, res: Response) => {
            this.handler.searchFilter(req, res);
        });
        this.router.post('/api/car', (req: Request, res: Response) => {
            this.handler.postCar(req, res);
        });
        this.router.put('/api/car/:carId', (req: Request, res: Response) => {
            this.handler.putCar(req, res);
        });
        this.router.delete('/api/car/:carId', (req: Request, res: Response) => {
            this.handler.deleteCar(req, res);
        });
    }
}
