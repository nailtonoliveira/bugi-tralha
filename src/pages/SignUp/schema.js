import * as Yup from 'yup';

const yupValidations = {
  name: Yup.string().required('Name is Required'),
  email: Yup.string()
    .required('E-mail is Required')
    .email('Invalid E-mail'),
  password: Yup.string()
    .required('Password is Required')
    .min(4, 'Must be between 4 and 25 characters')
    .max(25, 'Must be between 4 and 25 characters'),
};

export default {
  yupValidations,
  customValidations: {},
};
