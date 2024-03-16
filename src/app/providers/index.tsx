import { App } from "@/App";
import { VKProvider } from "./VKProvider";
import { QueryClientProvider } from "./QueryClientProvider";

export const AppProvider = () => {
    return (
        <QueryClientProvider>
            <VKProvider>
                <App />
            </VKProvider>
        </QueryClientProvider>
    );
};
