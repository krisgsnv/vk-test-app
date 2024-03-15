import { View, SplitLayout, SplitCol } from "@vkontakte/vkui";
import { useActiveVkuiLocation } from "@vkontakte/vk-mini-apps-router";

import { Persik, Home } from "./panels";
import { DEFAULT_VIEW_PANELS } from "./routes";
import {
  QueryClient,
  QueryClientProvider
} from "@tanstack/react-query";
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
const queryClient = new QueryClient();
export const App = () => {
    const { panel: activePanel = DEFAULT_VIEW_PANELS.HOME } = useActiveVkuiLocation();

    return (
        <QueryClientProvider client={queryClient}>
          <ReactQueryDevtools initialIsOpen={true} />
            <SplitLayout>
                <SplitCol>
                    <View activePanel={activePanel}>
                        <Home id="home" />
                        <Persik id="persik" />
                    </View>
                </SplitCol>
            </SplitLayout>
        </QueryClientProvider>
    );
};
