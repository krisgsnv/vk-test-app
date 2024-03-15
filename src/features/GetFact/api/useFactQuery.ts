import { UseQueryResult, useQuery } from "@tanstack/react-query";
import { fetchFact } from "./fetchFact";
import { IFetchFactResponse } from "../model/types";

export const useFactQuery = (): UseQueryResult<IFetchFactResponse, Error> =>
    useQuery({
        queryKey: ["fact"],
        queryFn: fetchFact,
        enabled: false,
        refetchOnWindowFocus: false
    });
