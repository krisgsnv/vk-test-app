import axios from "axios";
import { type QueryFunctionContext } from "@tanstack/react-query";
import { IFetchAgeResponse } from "../model/types";

export const fetchAge = async (name: string, options: QueryFunctionContext) => {
    const result = await axios.get<IFetchAgeResponse>(`https://api.agify.io?name=${name}`, options);
    return result.data;
};
