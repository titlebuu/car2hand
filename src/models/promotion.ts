/* jshint indent: 2 */
// tslint:disable
import * as sequelize from 'sequelize';
import {DataTypes} from 'sequelize';
import {promotionInstance, promotionAttribute} from './db';

module.exports = function(sequelize: sequelize.Sequelize, DataTypes: DataTypes) {
  return sequelize.define<promotionInstance, promotionAttribute>('promotion', {
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
    promotionId: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true,
      field: 'promotionId'
    },
    promotionName: {
      type: DataTypes.STRING,
      allowNull: true,
      field: 'promotionName'
    },
    promotionStart: {
      type: DataTypes.DATEONLY,
      allowNull: true,
      field: 'promotionStart'
    },
    promotionEnd: {
      type: DataTypes.DATEONLY,
      allowNull: true,
      field: 'promotionEnd'
    }
  }, {
    tableName: 'promotion'
  });
};
