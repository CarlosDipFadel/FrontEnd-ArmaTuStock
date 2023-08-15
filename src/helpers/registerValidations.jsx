import * as Yup from "yup";

export const validationSchema = Yup.object({
  firstName: Yup.string()
    .required("Campo requerido")
    .max(30, "Debe tener 30 caracteres o menos"),
  lastName: Yup.string()
    .required("Campo requerido")
    .max(30, "Debe tener 30 caracteres o menos"),
  email: Yup.string()
    .email("Correo electrónico inválido")
    .required("Campo requerido"),
  confirmEmail: Yup.string()
    .oneOf([Yup.ref("email"), null], "Los correos electrónicos no coinciden")
    .required("Campo requerido"),
  phone: Yup.string()
    .required("El teléfono es obligatorio")
    .matches(/^\d+$/, "Ingrese un número de teléfono válido"),
  address: Yup.string()
    .required("La dirección es obligatoria")
    .max(255, "La dirección no debe exceder los 255 caracteres"),
  postalCode: Yup.string()
    .required("El código postal es obligatorio")
    .matches(/^\d{5}$/, "Ingrese un código postal válido de 5 dígitos"),
  userName: Yup.string()
    .required("El nombre de usuario es obligatorio")
    .min(4, "El nombre de usuario debe tener al menos 4 caracteres")
    .max(20, "El nombre de usuario no debe exceder los 20 caracteres"),
  password: Yup.string()
    .min(8, "La contraseña debe tener al menos 8 caracteres")
    .required("Campo requerido"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Las contraseñas no coinciden")
    .required("Campo requerido"),
  role: Yup.string().required("Selecciona un rol válido"),
});
