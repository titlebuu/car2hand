import { Request, Response } from 'express';
import { MsgCode } from './../../configs/result-msg-code';
import { IResponse } from './interface';

export class CResponse {
    public response = async function (res: Response, status: "20000" | "50000", resultData?: any, megDesc?: any) {
        const responseData: IResponse = {
            httpStatus: MsgCode[status].httpStatus,
            resultCode: MsgCode[status].resultCode,
            resultDescription: MsgCode[status].resultDescription,
            moreInfo: MsgCode[status].moreInfo,
            resultData: MsgCode[status].resultData,
        };
        if (resultData) responseData.resultData = resultData;
        if (megDesc) responseData.moreInfo = JSON.stringify(megDesc);
        res.status(responseData.httpStatus).json(responseData);
    }
}