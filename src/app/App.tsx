import { View, SplitLayout, SplitCol } from "@vkontakte/vkui";
import { useActiveVkuiLocation } from "@vkontakte/vk-mini-apps-router";

import { FactPanel, AgePanel, HomePanel } from "@/widgets";
import { DEFAULT_VIEW_PANELS } from "@/app/routes";

export const App = () => {
    const { panel: activePanel = DEFAULT_VIEW_PANELS.HOME } = useActiveVkuiLocation();

    return (
        <SplitLayout>
            <SplitCol>
                <View activePanel={activePanel}>
                    <HomePanel id="home"/>
                    <FactPanel id="fact" />
                    <AgePanel id="age" />
                </View>
            </SplitCol>
        </SplitLayout>
    );
};
