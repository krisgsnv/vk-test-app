import { FC } from "react";
import {
    Panel,
    PanelHeader,
    Header,
    Group,
    NavIdProps} from "@vkontakte/vkui";
import { UserInfo } from "@vkontakte/vk-bridge";
import { GetAge } from "../features/GetAge";

export interface HomeProps extends NavIdProps {
    fetchedUser?: UserInfo;
}

export const Home: FC<HomeProps> = ({ id }) => {
    return (
        <Panel id={id}>
            <PanelHeader>Главная</PanelHeader>

            <Group header={<Header mode="secondary">Предсказание возраста по имени</Header>}>
                <GetAge />
            </Group>
        </Panel>
    );
};
