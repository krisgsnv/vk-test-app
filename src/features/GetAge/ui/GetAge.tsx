import { useEffect } from "react";
import { Button, FormItem, FormStatus } from "@vkontakte/vkui";
import { type SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { useDebounce } from "@/shared/hooks/useDebounce";
import { FieldController } from "@/shared/ui/FieldController";
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
            {isSuccess && <FormItem>Возраст: {getAge(data.age)}</FormItem>}
            {isError && <FormStatus header="Возникла ошибка, попробуйте позднее" mode="error" />}
            <Button
                disabled={isLoading || isFetching}
                type="submit"
                stretched
                size="l"
                mode="secondary"
            >
                Отправить
            </Button>
        </form>
    );
};
