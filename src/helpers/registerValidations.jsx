import * as Yup from "yup";

//validacion de nombre y apellido
export const validationFirstName = Yup.object({
  firstName: Yup.string()
    .required("Campo requerido")
    .max(30, "Debe tener 30 caracteres o menos"),
});

export const validationLastName = Yup.object({
  lastName: Yup.string()
    .required("Campo requerido")
    .max(30, "Debe tener 30 caracteres o menos"),
});

//validacion de email
export const validationEmail = Yup.object({
  email: Yup.string()
    .email("Correo electrónico inválido")
    .required("Campo requerido"),
});

export const validationConfirmEmail = Yup.object({
  confirmEmail: Yup.string()
    .oneOf([Yup.ref("email"), null], "Los correos electrónicos no coinciden")
    .required("Campo requerido"),
});

//validacion de telefono
export const validationPhone = Yup.object({
  phone: Yup.string()
    .required("El teléfono es obligatorio")
    .matches(/^\d+$/, "Ingrese un número de teléfono válido"),
});

//validacion direccion
export const validationAddress = Yup.object({
  address: Yup.string()
    .required("La dirección es obligatoria")
    .max(255, "La dirección no debe exceder los 255 caracteres"),
});

//validacion codigo postal

export const validationPostalCode = Yup.object({
  postalCode: Yup.string()
    .required("El código postal es obligatorio")
    .matches(/^\d{5}$/, "Ingrese un código postal válido de 5 dígitos"),
});

//validacion nombre de usuario

export const validationUserName = Yup.object({
  userName: Yup.string()
    .required("El nombre de usuario es obligatorio")
    .min(4, "El nombre de usuario debe tener al menos 4 caracteres")
    .max(20, "El nombre de usuario no debe exceder los 20 caracteres"),
});

//validacion de contraseña
export const validationPassword = Yup.object({
  password: Yup.string()
    .min(8, "La contraseña debe tener al menos 8 caracteres")
    .required("Campo requerido"),
});
export const validationConfirmPassword = Yup.object({
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Las contraseñas no coinciden")
    .required("Campo requerido"),
});
