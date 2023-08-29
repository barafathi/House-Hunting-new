import * as yup from 'yup';

const validation = yup.object({
  username: yup.string().required(),
  password: yup
    .string()
    .min(8, 'password must be at least 8 char')
    .required('password is required'),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password'), null], 'passwords must match'),
  mobile: yup.number().min(9).required(),
});

export default validation;



