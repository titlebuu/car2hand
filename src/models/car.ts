/* jshint indent: 2 */
// tslint:disable
import * as sequelize from 'sequelize';
import { DataTypes } from 'sequelize';
import { carInstance, carAttribute } from './db';

module.exports = function (sequelize: sequelize.Sequelize, DataTypes: DataTypes) {
  return sequelize.define<carInstance, carAttribute>('car', {
    carId: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true,
      field: 'carId'
    },
    modelsId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      primaryKey: true,
      field: 'modelsId'
    },
    carName: {
      type: DataTypes.STRING,
      allowNull: true,
      field: 'carName'
    },
    price: {
      type: DataTypes.DOUBLE,
      allowNull: true,
      field: 'price'
    },
    condition: {
      type: DataTypes.STRING,
      allowNull: true,
      field: 'condition'
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'description'
    },
    pathShow: {
      type: DataTypes.STRING,
      allowNull: true,
      field: 'pathShow'
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: true,
      field: 'createdAt'
    },
    createdBy: {
      type: DataTypes.STRING,
      allowNull: true,
      field: 'createdBy'
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: true,
      field: 'updatedAt'
    },
    updatedBy: {
      type: DataTypes.STRING,
      allowNull: true,
      field: 'updatedBy'
    },
    status: {
      type: DataTypes.STRING,
      allowNull: true,
      field: 'status'
    },
    years: {
      type: DataTypes.INTEGER,
      allowNull: true,
      field: 'years'
    },
    size: {
      type: DataTypes.STRING,
      allowNull: true,
      field: 'size'
    },
    gear: {
      type: DataTypes.STRING,
      allowNull: true,
      field: 'gear'
    },
    mileage: {
      type: DataTypes.STRING,
      allowNull: true,
      field: 'mileage'
    },
    color: {
      type: DataTypes.STRING,
      allowNull: true,
      field: 'color'
    },
    numberPlate: {
      type: DataTypes.STRING,
      allowNull: true,
      field: 'numberPlate'
    },
    downPayment: {
      type: DataTypes.STRING,
      allowNull: true,
      field: 'downPayment'
    },
    monthPayment: {
      type: DataTypes.STRING,
      allowNull: true,
      field: 'monthPayment'
    },
    timePayment: {
      type: DataTypes.STRING,
      allowNull: true,
      field: 'timePayment'
    },
    promotionId: {
      type: DataTypes.STRING,
      allowNull: true,
      primaryKey: true,
      field: 'promotionId'
    },
    branch: {
      type: DataTypes.STRING,
      allowNull: true,
      primaryKey: true,
      field: 'branch'
    }
  }, {
    tableName: 'car'
  });
};
