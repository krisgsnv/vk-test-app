import { View, SplitLayout, SplitCol } from "@vkontakte/vkui";
import { useActiveVkuiLocation } from "@vkontakte/vk-mini-apps-router";

import { Persik, Home } from "./panels";
import { DEFAULT_VIEW_PANELS } from "@/app/routes";

export const App = () => {
    const { panel: activePanel = DEFAULT_VIEW_PANELS.HOME } = useActiveVkuiLocation();

    return (
        <SplitLayout>
            <SplitCol>
                <View activePanel={activePanel}>
                    <Home id="home" />
                    <Persik id="persik" />
                </View>
            </SplitCol>
        </SplitLayout>
    );
};
