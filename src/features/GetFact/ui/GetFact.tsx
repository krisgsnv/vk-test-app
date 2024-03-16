import { useRef } from "react";
import { Button, Div, FormItem, Input } from "@vkontakte/vkui";

import { ErrorMessage } from "@/shared/ui";
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
                scrollToStart(element);
            }
        }
    };

    return (
        <form onSubmit={onSubmit}>
            <FormItem top="Факт">
                <Input getRef={inputRef} />
            </FormItem>
            {isError && (
                <Div>
                    <ErrorMessage />
                </Div>
            )}
            <FormItem>
                <Button
                    disabled={isLoading || isFetching}
                    type="submit"
                    stretched
                    size="l"
                    mode="secondary"
                >
                    Узнать факт!
                </Button>
            </FormItem>
        </form>
    );
};
