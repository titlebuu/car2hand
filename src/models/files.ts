/* jshint indent: 2 */
// tslint:disable
import * as sequelize from 'sequelize';
import {DataTypes} from 'sequelize';
import {filesInstance, filesAttribute} from './db';

module.exports = function(sequelize: sequelize.Sequelize, DataTypes: DataTypes) {
  return sequelize.define<filesInstance, filesAttribute>('files', {
    fileId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      field: 'fileId'
    },
    id: {
      type: DataTypes.STRING,
      allowNull: true,
      field: 'id'
    },
    path: {
      type: DataTypes.STRING,
      allowNull: true,
      field: 'path'
    },
    name: {
      type: DataTypes.STRING,
      allowNull: true,
      field: 'name'
    },
    size: {
      type: DataTypes.DOUBLE,
      allowNull: true,
      field: 'size'
    },
    type: {
      type: DataTypes.STRING,
      allowNull: true,
      field: 'type'
    },
    status: {
      type: DataTypes.STRING,
      allowNull: true,
      field: 'status'
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
    }
  }, {
    tableName: 'files'
  });
};
