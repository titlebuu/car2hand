import { models, sequelize } from '../../models/index';
import { validate } from '../../utils/validate';
import { IRequestDefault, IResponseAll } from './../../utils/interface';
import { ICarWhere } from './interface';
import { carAttribute } from "./../../models/db";
import { Config } from '../../../configs/configs';
import * as fs from 'fs';
import * as rm from 'rimraf';
// ADD BELONGTO
// models['car'].belongsTo(models['models'], {
//   as: 'modelss',
//   targetKey: 'modelsId',
// });

export default class Service {
  validate: validate = new validate();

  public getAll = async (params: IRequestDefault) => {
    return await models['car'].findAndCountAll(params || {});
  }

  public getById = async (params: ICarWhere) => {
    const resCar = await models['car'].findOne({ where: params });
    const where: any = { id: params.carId };
    if (params.status) where.status = params.status;
    const resFile = await models['files'].findAll({ where: where });
    return {
      car: resCar || {},
      files: resFile || {}
    }
  }

  public sqlFilter = async (filter: any = {}) => {
    const e = this.validate;
    let sqlWhere = ` WHERE 1=1 `;
    let sqlOptions = ` ORDER BY "car"."updatedAt" DESC LIMIT :limit OFFSET :offset `;
    let sql = `
    SELECT *  
    FROM "dbo"."car" AS "car" `;

    let sqlCount = `
    SELECT count(*) as count   
    FROM "dbo"."car" AS "car" `;

    let joinModel = ` INNER JOIN "dbo"."models" AS "models" ON "models"."modelsId" = "car"."modelsId"`;
    let joinBrand = ` INNER JOIN "dbo"."brand" AS "brand" ON "brand"."brandId" = "models"."brandId"`;

    if (e.notEmty(+filter.modelsId)) {
      joinModel += ` AND "models"."modelsId" = :modelsId`;
    }

    if (e.notEmty(+filter.brandId)) {
      joinBrand += ` AND "brand"."brandId" = :brandId`;
    }

    if (e.notEmty(filter.branch)) {
      sqlWhere += ` AND "car"."branch" = :branch`;
    }

    if (e.notEmty(+filter.year)) {
      filter.year = +filter.year;
      sqlWhere += ` AND "car"."years" = :year`;
    }

    if (e.notEmty(+filter.priceStart)) {
      sqlWhere += ` AND "car"."price" >= ${filter.priceStart}`;
    }

    if (e.notEmty(+filter.priceEnd) && +filter.priceEnd > 1000000) {
      sqlWhere += ` AND "car"."price" >= ${filter.priceEnd} `;
    } else {
      if (e.notEmty(+filter.priceEnd) && +filter.priceEnd > 0) {
        sqlWhere += ` AND "car"."price" <= ${filter.priceEnd} `;
      }
    }

    const rows = await sequelize.query(
      sql +
      joinModel +
      joinBrand +
      sqlWhere +
      sqlOptions, {
      replacements: filter,
      type: sequelize.QueryTypes.SELECT
    });

    const count = await sequelize.query(
      sqlCount +
      joinModel +
      joinBrand +
      sqlWhere, {
      replacements: filter,
      type: sequelize.QueryTypes.SELECT
    });

    return {
      count: count && count[0].count || 0,
      rows: rows || {}
    };
  }

  public postCar = async (params: carAttribute) => {
    return await models['car'].create(params);
  }

  public putCar = async (params: carAttribute['carId'], dataUpdate: carAttribute) => {
    // VALIDATE CARID 
    const updateCar = await models['car'].findOne({ where: params })
    if (updateCar) {
      const resModel = await models['models'].findOne({ where: { modelsId: dataUpdate.modelsId } })
      if (resModel) {
        await models['car'].update(dataUpdate, { where: params });
        return 'Succes'
      } else {
        return 'No Model'
      }

    } else {
      return 'No ID'
    }
  }

  public deleteCar = async (params: carAttribute['carId']) => {
    const delCar = await models['car'].findOne({ where: params })
    if (delCar) {
      await models['car'].destroy({ where: params })
      return 'Succes'
    } else {
      return 'No CarId'
    }

  }
  debugger
  public deleteFileAll = async function (params: any) {
    try {
      const responseFile = await models['files'].findOne({ where: { id: params.carId } });
      if (responseFile && responseFile.path) {
        const path = Config.filePath + '/' + responseFile.path;
        const rootPath = path.split(responseFile.fileId.toString());
        const strPath = rootPath[0].toString();
        if (fs.existsSync(strPath)) {
          const status = await this.delFolder(strPath);
        }
        await models.car.destroy({ where: params });
        await models.files.destroy({ where: { id: params.carId } });
      } else {
        await models.car.destroy({ where: params });
      }
      return 'delete Car success';
    } catch (err) {
      throw err;
    }
  }

  delFolder = (strPath: string): Promise<any> => {
    return new Promise((resolve, reject) => {
      rm(strPath, function () {
        resolve(true)
      });
    }
    );
  }
}

