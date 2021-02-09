/* jshint indent: 2 */
// tslint:disable
import * as sequelize from 'sequelize';
import {DataTypes} from 'sequelize';
import {reviewInstance, reviewAttribute} from './db';

module.exports = function(sequelize: sequelize.Sequelize, DataTypes: DataTypes) {
  return sequelize.define<reviewInstance, reviewAttribute>('review', {
    reviewId: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true,
      field: 'reviewId'
    },
    reviewName: {
      type: DataTypes.STRING,
      allowNull: true,
      field: 'reviewName'
    },
    reviewPart: {
      type: DataTypes.STRING,
      allowNull: true,
      field: 'reviewPart'
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
    updatedBy: {
      type: DataTypes.STRING,
      allowNull: true,
      field: 'updatedBy'
    },
    reviewType: {
      type: DataTypes.STRING,
      allowNull: true,
      field: 'reviewType'
    },
    status: {
      type: DataTypes.STRING,
      allowNull: true,
      field: 'status'
    }
  }, {
    tableName: 'review'
  });
};
