

import * as yup from 'yup';

export const loginSchema = yup.object().shape({
    email: yup.string().email("Enter valid email").required("Email is Required"),
    password: yup.string().min(5).required("Password is Required"),
});