import { models, sequelize } from '../../models/index';
import { validate } from '../../utils/validate';
import { IRequestReview } from './interface';

export default class Service {
    validate: validate = new validate();

    public getReviewVideo = async (data: IRequestReview) => {
        return await models['review'].findAndCountAll({
            where: { reviewType: 'video' },
            limit: data.limit,
            offset: data.offset,
            order: [['reviewId', 'ASC']],

        });
    }
    public getReviewImage = async (data: IRequestReview) => {
        return await models['review'].findAndCountAll({
            where: { reviewType: 'image' },
            limit: data.limit,
            offset: data.offset,
            order: [['reviewId', 'ASC']],
        });
    }

}