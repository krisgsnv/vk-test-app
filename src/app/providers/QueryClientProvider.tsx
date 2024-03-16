import type { PropsWithChildren } from "react";
import {
    QueryClient,
    QueryClientProvider as TanStackQueryClientProvider
} from "@tanstack/react-query";

const queryClient = new QueryClient();

export const QueryClientProvider = ({ children }: PropsWithChildren) => {
    return (
        <TanStackQueryClientProvider client={queryClient}>{children}</TanStackQueryClientProvider>
    );
};
