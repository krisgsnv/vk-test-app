import axios from "axios";
import { type QueryFunctionContext } from "@tanstack/react-query";
import { IFetchFactResponse } from "../model/types";

export const fetchFact = async (options: QueryFunctionContext) => {
    const result = await axios.get<IFetchFactResponse>("https://catfact.ninja/fact", options);
    return result.data;
};
