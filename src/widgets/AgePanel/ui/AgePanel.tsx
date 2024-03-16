import { Panel, PanelHeader, type NavIdProps, PanelHeaderBack } from "@vkontakte/vkui";
import { GetAge } from "@/features";
import { useRouteNavigator } from "@vkontakte/vk-mini-apps-router";

export const AgePanel = ({ id }: NavIdProps) => {
    const routeNavigator = useRouteNavigator();
    return (
        <Panel id={id}>
            <PanelHeader before={<PanelHeaderBack onClick={() => routeNavigator.back()} />}>
                Предсказание возраста по имени
            </PanelHeader>
            <GetAge />
        </Panel>
    );
};
