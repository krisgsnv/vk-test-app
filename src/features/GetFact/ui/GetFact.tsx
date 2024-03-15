import { useRef } from "react";
import { Button, FormItem, FormStatus, Input } from "@vkontakte/vkui";

import { useFactQuery } from "../api/useFactQuery";
import { scrollToStart } from "../lib/scroll";
import { setCursor } from "../lib/cursor";

export const GetFact = () => {
    const { refetch, isLoading, isFetching, isError } = useFactQuery();
    const inputRef = useRef<HTMLInputElement>(null);

    const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const { isSuccess, data } = await refetch();
        if (isSuccess) {
            const element = inputRef.current;
            if (element) {
                const index = data.fact.indexOf(" ");
                element.value = data.fact;
                setCursor(element, index);
                scrollToStart(element)
            }
        }
    };

    return (
        <form onSubmit={onSubmit}>
            <FormItem top="Факт">
                <Input getRef={inputRef} />
            </FormItem>

            {isError && <FormStatus header="Возникла ошибка, попробуйте позднее" mode="error" />}
            <Button
                disabled={isLoading || isFetching}
                type="submit"
                stretched
                size="l"
                mode="secondary"
            >
                Узнать факт!
            </Button>
        </form>
    );
};
