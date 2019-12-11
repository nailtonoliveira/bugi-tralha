import * as Yup from 'yup';

const yupValidations = {
  uid: Yup.string().required('Username is Required'),
  password: Yup.string()
    .required('Password is Required')
    .min(4, 'Must be between 4 and 25 characters')
    .max(25, 'Must be between 4 and 25 characters'),
};

export default {
  yupValidations,
  customValidations: {},
};
