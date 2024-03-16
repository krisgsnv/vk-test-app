import { Panel, PanelHeader, type NavIdProps, Cell, Group } from "@vkontakte/vkui";
import { useRouteNavigator } from "@vkontakte/vk-mini-apps-router";

export const HomePanel = ({ id }: NavIdProps) => {
    const routeNavigator = useRouteNavigator();
    return (
        <Panel id={id}>
            <PanelHeader>Главная</PanelHeader>
            <Group>
                <Cell expandable="auto" onClick={() => routeNavigator.push("fact")}>
                    Узнать случайный факт
                </Cell>
                <Cell expandable="auto" onClick={() => routeNavigator.push("age")}>
                    Угадать возраст
                </Cell>
            </Group>
        </Panel>
    );
};
