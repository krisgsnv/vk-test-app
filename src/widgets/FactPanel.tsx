import { Panel, PanelHeader, type NavIdProps, PanelHeaderBack } from "@vkontakte/vkui";
import { GetFact } from "@/features";
import { useRouteNavigator } from "@vkontakte/vk-mini-apps-router";

export const FactPanel = ({ id }: NavIdProps) => {
    const routeNavigator = useRouteNavigator();
    return (
        <Panel id={id}>
            <PanelHeader before={<PanelHeaderBack onClick={() => routeNavigator.back()} />}>
                Случайный факт
            </PanelHeader>
            <GetFact />
        </Panel>
    );
};
