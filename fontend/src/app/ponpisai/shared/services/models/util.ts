export interface IResponse {
    count: number;
    rows: Array<object>;
}

export interface IRequestDefault {
    limit?: number;
    offset?: number;
    order?: Array<Array<string>>;
}

export interface IRequestCar {
    brandId: string;
    modelsId: string;
    year: string;
    price: string;
}

export class ObserCarName {
    readonly name: string = 'carList';
}

export interface Itransactions {
    branch?: string;
}
