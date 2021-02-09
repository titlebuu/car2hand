/* jshint indent: 2 */
// tslint:disable
import * as sequelize from 'sequelize';
import {DataTypes} from 'sequelize';
import {modelsInstance, modelsAttribute} from './db';

module.exports = function(sequelize: sequelize.Sequelize, DataTypes: DataTypes) {
  return sequelize.define<modelsInstance, modelsAttribute>('models', {
    modelsId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      field: 'modelsId'
    },
    modelsNameEn: {
      type: DataTypes.STRING,
      allowNull: true,
      field: 'modelsNameEn'
    },
    modelsNameTh: {
      type: DataTypes.STRING,
      allowNull: true,
      field: 'modelsNameTh'
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false,
      field: 'createdAt'
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: false,
      field: 'updatedAt'
    },
    brandId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'brand',
        key: 'brandId'
      },
      field: 'brandId'
    }
  }, {
    tableName: 'models'
  });
};
