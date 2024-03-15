import { UseQueryResult, useQuery } from "@tanstack/react-query";
import { fetchAge } from "./fetchAge";
import { IFetchAgeResponse } from "../model/types";

export const useAgeQuery = (name: string): UseQueryResult<IFetchAgeResponse, Error> =>
    useQuery({
        queryKey: ["age", name],
        queryFn: (options) => fetchAge(name, options),
        enabled: false,
        refetchOnWindowFocus: false
    });
