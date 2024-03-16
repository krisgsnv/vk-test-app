import { useEffect } from "react";
import { Button, Div, FormItem } from "@vkontakte/vkui";
import { type SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { useDebounce } from "@/shared/hooks/useDebounce";
import { ErrorMessage, FieldController } from "@/shared/ui";
import { useAgeQuery } from "../api/useAgeQuery";
import { schema } from "../model/schema";
import type { IFetchAgeResponse, IGetAgeFormData } from "../model/types";

export const GetAge = () => {
    const {
        control,
        handleSubmit,
        watch,
        getValues,
        formState: { isDirty }
    } = useForm<IGetAgeFormData>({
        resolver: yupResolver(schema),
        defaultValues: {
            name: ""
        }
    });
    const { data, refetch, isLoading, isFetching, isSuccess, isError } = useAgeQuery(
        getValues("name")
    );
    const formData = watch("name");
    const debouncedValue = useDebounce(formData, 3000);

    useEffect(() => {
        if (isDirty) {
            handleSubmit(onSubmit)();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [debouncedValue]);

    const onSubmit: SubmitHandler<IGetAgeFormData> = () => {
        if (!isLoading && !isFetching && !data) {
            refetch();
        }
    };

    const getAge = (age: IFetchAgeResponse["age"]) => (age ? age : "Не определен");

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <FieldController name="name" label="Имя" control={control} />
            {isSuccess && <Div>Возраст: {getAge(data.age)}</Div>}
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
                    Отправить
                </Button>
            </FormItem>
        </form>
    );
};
