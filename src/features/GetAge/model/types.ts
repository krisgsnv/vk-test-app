export interface IGetAgeFormData {
    name: string;
}

export interface IFetchAgeResponse {
    age: null | number;
    count: number;
    name: IGetAgeFormData["name"];
}