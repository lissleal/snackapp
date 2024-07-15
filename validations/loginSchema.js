// src/validations/loginSchema.js
import { object, string } from 'yup';

export const loginSchema = object().shape({
    email: string()
        .email('No es un correo valido')
        .required('El email es requerido'),
    password: string()
        .min(6, 'La contraseña debe contener como mínimo 6 caracteres')
        .required('La contraseña es requerida'),
});
