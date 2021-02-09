// tslint:disable
import * as Sequelize from 'sequelize';


// table: promotion
export interface promotionAttribute {
  createdAt:Date;
  updatedAt:Date;
  createdBy?:string;
  updatedBy?:string;
  status?:string;
  promotionId:string;
  promotionName?:string;
  promotionStart?:Date;
  promotionEnd?:Date;
}
export interface promotionInstance extends Sequelize.Instance<promotionAttribute>, promotionAttribute { }
export interface promotionModel extends Sequelize.Model<promotionInstance, promotionAttribute> { }

// table: models
export interface modelsAttribute {
  modelsId:number;
  modelsNameEn?:string;
  modelsNameTh?:string;
  createdAt:Date;
  updatedAt:Date;
  brandId?:number;
}
export interface modelsInstance extends Sequelize.Instance<modelsAttribute>, modelsAttribute { }
export interface modelsModel extends Sequelize.Model<modelsInstance, modelsAttribute> { }

// table: files
export interface filesAttribute {
  fileId:number;
  id?:string;
  path?:string;
  name?:string;
  size?:number;
  type?:string;
  status?:string;
  createdAt?:Date;
  createdBy?:string;
  updatedAt?:Date;
  updatedBy?:string;
}
export interface filesInstance extends Sequelize.Instance<filesAttribute>, filesAttribute { }
export interface filesModel extends Sequelize.Model<filesInstance, filesAttribute> { }

// table: brand
export interface brandAttribute {
  brandId:number;
  brandNameEn?:string;
  brandNameTh?:string;
  createdAt:Date;
  updatedAt:Date;
  createdBy?:string;
  updateBy?:string;
  image?:string;
}
export interface brandInstance extends Sequelize.Instance<brandAttribute>, brandAttribute { }
export interface brandModel extends Sequelize.Model<brandInstance, brandAttribute> { }

// table: review
export interface reviewAttribute {
  reviewId:string;
  reviewName?:string;
  reviewPart?:string;
  createdAt:Date;
  updatedAt:Date;
  createdBy?:string;
  updatedBy?:string;
  reviewType?:string;
  status?:string;
}
export interface reviewInstance extends Sequelize.Instance<reviewAttribute>, reviewAttribute { }
export interface reviewModel extends Sequelize.Model<reviewInstance, reviewAttribute> { }

// table: car
export interface carAttribute {
  carId:string;
  modelsId?:number;
  carName?:string;
  price?:number;
  condition?:string;
  description?:string;
  pathShow?:string;
  createdAt?:Date;
  createdBy?:string;
  updatedAt?:Date;
  updatedBy?:string;
  status?:string;
  years?:number;
  size?:string;
  gear?:string;
  mileage?:string;
  color?:string;
  numberPlate?:string;
  downPayment?:string;
  monthPayment?:string;
  timePayment?:string;
  promotionId?:string;
  branch?:string;
}
export interface carInstance extends Sequelize.Instance<carAttribute>, carAttribute { }
export interface carModel extends Sequelize.Model<carInstance, carAttribute> { }
