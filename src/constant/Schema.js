
import { toast } from 'react-hot-toast';
import * as yup from 'yup';

export const loginSchema = yup.object().shape({
    email: yup.string().email(toast.error("Enter valid email")).required(toast.error("Password is Required")),
    password: yup.string().min(5).required(toast.error("Password is Required")),
});