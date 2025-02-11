// //validación con zod ts
// import { z } from "zod";

// //función para validación de login
// export const loginValidationSchema = z.object({
//   email: z.string().email({
//     message: "Por favor, ingrese un correo electrónico válido.",
//   }),
//   password: z.string().min(8, {
//     message: "La contraseña debe tener al menos 8 caracteres.",
//   }),
// });

// const countriesList = ["Perú", "Colombia", "Chile", "Argentina"] as const;
// const genderList = ["Masculino", "Femenino"] as const;

// export const registerUserValidationSchema = z.object({
//   name: z.string().min(2, { message: "El nombre no puede estar vacío." }),
//   lastname: z
//     .string()
//     .min(2, { message: "El apellido no puede estar  vacío." }),
//   date: z.string().min(1, {
//     message: "Por favor, seleccione una fecha de nacimiento.",
//   }),
//   country: z.enum(countriesList, {
//     errorMap: () => ({ message: "Por favor, seleccione un pais." }),
//   }),
//   gender: z.enum(genderList, {
//     errorMap: () => ({ message: "Por favor, seleccione un género." }),
//   }),
//   phoneNumber: z.string().refine(
//     (phone, ctx) => {
//       const { country } = ctx.parent;

//       //expresiones regulares para validar el número de celular según el país
//       const phoneRegexByCountry: Record<string, RegExp> = {
//         Perú: /^9\d{8}$/, // Perú: Empieza con 9 y tiene 9 dígitos
//         Colombia: /^3\d{9}$/, // Colombia: Empieza con 3 y tiene 10 dígitos
//         Chile: /^9\d{8}$/, // Chile: Empieza con 9 y tiene 9 dígitos
//         Argentina: /^1[0-9]{9}$/, // Argentina: Empieza con 1 y tiene 10 dígitos
//       };

//       // Verifica si el número de celular coincide con el patrón del país seleccionado
//       const regex = phoneRegexByCountry[country];
//       return regex ? regex.test(phone) : false;
//     },
//     { message: "El número de celular no es válido." }
//   ),
// });
// const userData = {
//   date: "1995-05-15",
//   country: "Perú",
//   phoneNumber: "912345678",
// };

// const result = registerUserValidationSchema.safeParse(userData);

// if (!result.success) {
//   console.log(result.error.errors); // Muestra los errores de validación
// } else {
//   console.log("Número de celular válido"); // El número de celular es válido
// }
