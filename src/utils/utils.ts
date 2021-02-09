import { models, sequelize } from './../models/index';

export class Utils {

    public runCodeString = async function (table: string, field: string, cut: string, length: number) {
        try {
            var fields = models[table].attributes[field].field;
            var response = await models[table].findOne({
                order: [[fields, 'desc']]
            });
            var str = 0;
            if (response && response.dataValues[fields]) {
                const maxVal = response.dataValues[fields]; // 0CAR00001
                const now = maxVal.split(cut);
                str = Number(now[1]) ? Number(now[1]) + 1 : now[1] + 1;
            }
            // str.toString();
            return cut + String(str).padStart(length, '0');
        } catch (error) {
            throw error;
        }
    }
    public runNumber = async function (table: string, field: string) {
        try {
            var fields = models[table].attributes[field].field;
            var response = await models[table].findOne({
                order: [[fields, 'desc']]
            });
            var number = 0;
            if (response && response.dataValues[fields]) {
                const maxVal = response.dataValues[fields];
                number = Number(maxVal) ? Number(maxVal) + 1 : maxVal + 1;
            } else {
                number = 1;
            }
            return Number(number);
        } catch (error) {
            throw error;
        }
    }

}