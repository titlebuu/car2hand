// tslint:disable
import * as path from 'path';
import * as sequelize from 'sequelize';
import * as def from './db';

export interface ITables {
  promotion:def.promotionModel;
  models:def.modelsModel;
  files:def.filesModel;
  brand:def.brandModel;
  review:def.reviewModel;
  car:def.carModel;
}

export const getModels = function(seq:sequelize.Sequelize):ITables {
  const tables:ITables = {
    promotion: seq.import(path.join(__dirname, './promotion')),
    models: seq.import(path.join(__dirname, './models')),
    files: seq.import(path.join(__dirname, './files')),
    brand: seq.import(path.join(__dirname, './brand')),
    review: seq.import(path.join(__dirname, './review')),
    car: seq.import(path.join(__dirname, './car')),
  };
  return tables;
};
