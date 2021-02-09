import { Request, Response } from 'express';
import { models, sequelize } from '../../models/index';
// import {ProductAttributes, ProductInstance} from "../models/interfaces/product-interface";
import { Transaction } from "sequelize";

export default class Handler {
  public getList = async (req: Request, res: Response) => {
    let params = {}
    if (req.query) params = req.query;
    let response = await models['brand'].findAll({ where: params });
    res.status(200).send(response);
  }
}
