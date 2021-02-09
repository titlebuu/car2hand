/* jshint indent: 2 */
// tslint:disable
import * as sequelize from 'sequelize';
import {DataTypes} from 'sequelize';
import {brandInstance, brandAttribute} from './db';

module.exports = function(sequelize: sequelize.Sequelize, DataTypes: DataTypes) {
  return sequelize.define<brandInstance, brandAttribute>('brand', {
    brandId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      field: 'brandId'
    },
    brandNameEn: {
      type: DataTypes.STRING,
      allowNull: true,
      field: 'brandNameEn'
    },
    brandNameTh: {
      type: DataTypes.STRING,
      allowNull: true,
      field: 'brandNameTh'
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
    createdBy: {
      type: DataTypes.STRING,
      allowNull: true,
      field: 'createdBy'
    },
    updateBy: {
      type: DataTypes.STRING,
      allowNull: true,
      field: 'updateBy'
    },
    image: {
      type: DataTypes.STRING,
      allowNull: true,
      field: 'image'
    }
  }, {
    tableName: 'brand'
  });
};
