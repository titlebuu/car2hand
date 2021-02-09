export interface IRequestDefault {
    limit?: number;
    offset?: number;
    order?: Array<Array<string>>;
}

export interface IResponseAll {
    count: number;
    rows: Array<object>
}

export interface IResult {
    resultCode?: number;
    resultDesceiption?: string,
}

export interface IResultCode {
    status: "20000", "20100", "40000", "40101", "40102", "40103", "40300", "40301", "40400", "40401", "40900", "40901", "42200", "50000", "50001", "50002", "50100", "50300", "50301", "50400"
}

export interface IResponse {
    httpStatus: number;
    resultCode: string;
    resultDescription: string;
    moreInfo: string;
    resultData: any;
}
