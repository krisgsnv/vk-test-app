import { FormItem, Input } from "@vkontakte/vkui";
import { Controller, type FieldValues, type Control, type Path } from "react-hook-form";

interface IFieldControllerProps<T extends FieldValues> {
    control: Control<T, object>;
    name: Path<T>;
    label: string;
}

export const FieldController = <T extends FieldValues>({
    name,
    label,
    control
}: IFieldControllerProps<T>) => {
    return (
        <Controller
            name={name}
            control={control}
            render={({ field: { ref, ...field }, fieldState: { error, invalid } }) => {
                return (
                    <FormItem
                        htmlFor={name}
                        top={label}
                        status={invalid ? "error" : "default"}
                        bottom={error && error.message}
                    >
                        <Input id={name} {...field} getRef={ref} />
                    </FormItem>
                );
            }}
        />
    );
};
