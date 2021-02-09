import { models, sequelize } from '../../models/index';
import { validate } from '../../utils/validate';
import { IRequestDefault, IResponseAll } from '../../utils/interface';
import { filesAttribute } from '../../models/db';
import { IFlie, IFileId } from './interface';
import { Config } from '../../../configs/configs';
import * as fs from 'fs';
import * as path from 'path'

export default class Service {
  validate: validate = new validate();

  public postFile = async (params: IFlie) => {
    return await models['files'].create(params);
  }

  public uploads = (data: IFlie): Promise<any> => {
    return new Promise((resolve, reject) => {
      if (!data.file) {
        throw 'dose not read file array ';
      }
      return this.checkFileAndCreateFolder(data).then(function (resp) {
        const pathFileName = resp.path + '/' + data.fileId + '.' + resp.type;
        const newPath = pathFileName.split(Config.filePath + '/');
        const path = newPath[1];
        const file = data.file.split(';base64,') ? data.file.split(';base64,').pop() : data.file;
        return fs.writeFile(pathFileName, file, { encoding: 'base64' }, (err) => {
          if (err) {
            reject('err');
          } else {
            path ? resolve(String(path)) : reject('err');
          }
        });
      }).catch(function (err) {
        reject(err);
      });
    }).catch(function (err) {
      throw err;
    })
  }

  private checkFileAndCreateFolder = (data: IFlie): Promise<any> => {
    try {
      return new Promise((resolve, reject) => {

        let result;
        let createPath = Config.filePath;
        if (!fs.existsSync(Config.filePath)) fs.mkdirSync(Config.filePath);

        createPath += '/' + data.type.toLocaleLowerCase();
        if (!fs.existsSync(createPath)) fs.mkdirSync(createPath);

        createPath += '/' + data.brand.toLocaleLowerCase();
        if (!fs.existsSync(createPath)) fs.mkdirSync(createPath);

        createPath += '/' + data.models.toLocaleLowerCase();
        if (!fs.existsSync(createPath)) fs.mkdirSync(createPath);

        createPath += '/' + data.id;
        if (!fs.existsSync(createPath)) fs.mkdirSync(createPath);

        if (typeof data.file !== 'string') {
          reject('failed.')
        }
        const mime = data.file.match(/data:([a-zA-Z0-9]+\/[a-zA-Z0-9-.+]+).*,.*/);
        if (mime && mime.length) {
          result = mime[1];
        }
        let names = data.name.split('.');
        let type = names[names.length - 1];
        resolve({ type: type, path: createPath })
      }).catch(function (err) {
        throw new Error(err.message);
      })
    } catch (err) {
      throw err;
    }
  }

  public getBrandAndModels = async (filter: IFlie) => {
    let sql = `SELECT "models"."modelsId" ,"models"."modelsNameEn" ,  "brand"."brandId" ,"brand"."brandNameEn" 
    FROM "dbo"."models" AS "models"
    INNER JOIN "dbo"."brand" AS "brand" ON "brand"."brandId" = "models"."brandId"
    WHERE "models"."modelsId" = '${filter.modelsId}'
    LIMIT 1`;
    const response = await sequelize.query(sql, {
      replacements: filter, type: sequelize.QueryTypes.SELECT
    });
    return response[0] || {};
  }

  public deleteFile = async function (params: IFileId) {
    try {
      const responseFile = await models['files'].findOne({ where: params });
      const path = Config.filePath + '/' + responseFile.path;
      if (fs.existsSync(path)) fs.unlinkSync(path);
      await models['files'].destroy({ where: params });
      return 'delete file success';
    } catch (error) {
      throw error;
    }
  }

}