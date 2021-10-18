import * as yup from 'yup';

export const ValidationTaskFormSchemas = yup.object().shape(
    {
        topic: yup.string().required(),
        title: yup.string().required(),
        conditionTask: yup.string().required(),
        solution1: yup.string().required(),
    }
)