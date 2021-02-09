export interface IFlie {
    fileId?: number;
    id?: string;
    path?: string;
    name?: string;
    size?: number;
    type?: string;
    status?: string;
    createdAt?: Date;
    createdBy?: string;
    updatedAt?: Date;
    updatedBy?: string;
    file: string;
    method: string;
    modelsId?: string;
    brand?: string;
    models?: string;
}

export interface IFileId{
    fileId?: number; 
}

export interface IId{
    id?: string;
}