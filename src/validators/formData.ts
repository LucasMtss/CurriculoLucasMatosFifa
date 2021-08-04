import * as Yup from 'yup';

export const formDataValidator = Yup.object().shape({
  name: Yup.string().required('Campo obrigatório'),
  email: Yup.string()
    .required('Campo Obrigatório')
    .email('Endereço de email inválido'),
  telephone: Yup.string().required('Campo Obrigatório'),
  companyName: Yup.string().required('Campo Obrigatório'),
  message: Yup.string().required('Campo Obrigatório'),
});
