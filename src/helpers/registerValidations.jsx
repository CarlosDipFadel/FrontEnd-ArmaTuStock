import * as Yup from 'yup';

 //validacion de nombre y apellido
export const validationFirstName = Yup.object({
  firstName: Yup.string()
  .required('Campo requerido')
  .max(30, 'Debe tener 30 caracteres o menos'),
});

export const validationLastName = Yup.object({
  lastName: Yup.string()
      .required('Campo requerido')
      .max(30, 'Debe tener 30 caracteres o menos'),
});

//validacion de email
export const validationEmail = Yup.object({
  email: Yup.string().email('Correo electrónico inválido').required('Campo requerido'),
});

export const validationConfirmEmail = Yup.object({
    confirmEmail: Yup.string()
      .oneOf([Yup.ref('email'), null], 'Los correos electrónicos no coinciden')
      .required('Campo requerido'),
});

 //validacion de contraseña
export const validationPassword = Yup.object({
  password: Yup.string().min(8, 'La contraseña debe tener al menos 8 caracteres').required('Campo requerido'),
});
export const validationConfirmPassword = Yup.object({
  confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Las contraseñas no coinciden')
      .required('Campo requerido'),
});
