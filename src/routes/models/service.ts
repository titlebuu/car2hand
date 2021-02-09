import { models, sequelize } from '../../models/index';
import { validate } from '../../utils/validate';
import { IRequestDefault, IResponseAll } from './../../utils/interface';
import { modelsAttribute } from "./../../models/db";

// ADD BELONGTO
// models['car'].belongsTo(models['models'], {
//   as: 'modelss',
//   targetKey: 'modelsId',
// });

export default class Service {
  validate: validate = new validate();

  public postModels = async (params: modelsAttribute) => {
    return await models['models'].create(params);
  }

  public putModels = async (params: modelsAttribute['modelsId'], dataUpdate: modelsAttribute) => {
    // VALIDATE CARID 
    const updateModels = await models['models'].findOne({ where: params })
    if (updateModels) {
      const resBrand = await models['brand'].findOne({ where: { brandId: dataUpdate.brandId } })
      if (resBrand) {
        await models['models'].update(dataUpdate, { where: params });
        return 'Succes'
      } else {
        return 'No Brand'
      }

    } else {
      return 'No Models ID'
    }
  }

  public deleteModels = async (params: modelsAttribute['modelsId']) => {
    const delModels = await models['models'].findOne({ where: params })
    if (delModels) {
      await models['models'].destroy({ where: params })
      return 'Succes'
    } else {
      return 'No ModelsId'
    }

  }
}