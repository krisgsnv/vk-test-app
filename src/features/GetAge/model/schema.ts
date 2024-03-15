import * as yup from "yup";

export const schema = yup.object({
    name: yup
        .string()
        .required("Обязательное поле")
        .matches(/^[a-zA-Z]+$/, "Имя должно содержать только латинские буквы")
});
