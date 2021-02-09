export class validate {

    public checkPrice = (data) => {
        let sql;
        switch (data) {
            case '1': sql = ` AND "car"."price" >= 50 AND "car"."price" <= 100000 `; break;
            case '2': sql = ` AND "car"."price" >= 100000 AND "car"."price" <= 200000 `; break;
            case '3': sql = ` AND "car"."price" >= 200000 AND "car"."price" <= 300000 `; break;
            case '4': sql = ` AND "car"."price" >= 300000 AND "car"."price" <= 400000 `; break;
            case '5': sql = ` AND "car"."price" >= 400000 AND "car"."price" <= 500000 `; break;
            case '6': sql = ` AND "car"."price" >= 500000 AND "car"."price" <= 600000 `; break;
            case '7': sql = ` AND "car"."price" >= 600000 AND "car"."price" <= 700000 `; break;
            case '8': sql = ` AND "car"."price" >= 700000 AND "car"."price" <= 800000 `; break;
            case '9': sql = ` AND "car"."price" >= 800000 AND "car"."price" <= 900000 `; break;
            case '10': sql = ` AND "car"."price" >= 900000 AND "car"."price" <= 1000000 `; break;
            case '11': sql = ` AND "car"."price" >= 1000000 `; break;
            default: break;
        }
        return sql;
    }

    public notEmty = (data) => {
        const t = (
            data == 'undefined' ||
            data == '' ||
            data == undefined ||
            data == 'null' ||
            data == null ||
            data == {} ||
            data.length <= 0 ||
            data.length === '0' ||
            data == isNaN
        ) ? false : true;
        return t;
    }
}