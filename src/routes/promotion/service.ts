import { models, sequelize } from '../../models/index';
import { validate } from '../../utils/validate';
import { IRequestDefault, IResponseAll } from './../../utils/interface';
export default class Service {
  validate: validate = new validate();

  public getPromotion = async (filter: IRequestDefault) => {
    let sqlOptions = ` ORDER BY "promotion"."updatedAt" LIMIT :limit OFFSET :offset `;
    let sql = `
      select * 
      from "dbo"."car" LEFT JOIN "dbo"."promotion" ON "dbo"."promotion"."promotionId" = "dbo"."car"."promotionId"
      WHERE "dbo"."promotion"."promotionStart" <= NOW() 
      AND "dbo"."promotion"."promotionEnd" >= NOW() `;
    let sqlCount = `
      select count(*) as count   
      from "dbo"."car" LEFT JOIN "dbo"."promotion" ON "dbo"."promotion"."promotionId" = "dbo"."car"."promotionId"
      WHERE "dbo"."promotion"."promotionStart" <= NOW() 
      AND "dbo"."promotion"."promotionEnd" >= NOW() `;
    const rows = await sequelize.query(
      sql +
      sqlOptions, {
      replacements: filter,
      type: sequelize.QueryTypes.SELECT
    });

    const count = await sequelize.query(
      sqlCount, {
      replacements: filter,
      type: sequelize.QueryTypes.SELECT
    });

    return {
      count: count && count[0].count || 0,
      rows: rows || {}
    };
  }

}