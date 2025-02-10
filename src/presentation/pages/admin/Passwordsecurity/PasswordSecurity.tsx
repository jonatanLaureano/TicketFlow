import { Button } from "@/presentation/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/presentation/components/ui/form";
import { Input } from "@/presentation/components/ui/input";
import { useForm } from "react-hook-form";
import * as z from "zod"; // Puedes usar zod para validación de esquemas
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react"; // Importamos useState para manejar el estado de la contraseña
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import {
  Alert,
  AlertTitle,
  AlertDescription,
} from "@/presentation/components/ui/alert";



// Validación de esquema
const changePasswordSchema = z.object({
  currentPassword: z.string().min(1, "Current password is required"),
  newPassword: z
    .string()
    .min(8, "Password must be at least 8 characters")
    .max(20, "Password cannot be more than 20 characters")
    .regex(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,20}$/,
      "Password must contain at least one uppercase letter, one lowercase letter, and one number"
    ),
  confirmPassword: z.string().min(8, "Please confirm your password"),
});

changePasswordSchema.refine(
  (data) => data.newPassword === data.confirmPassword,
  {
    path: ["confirmPassword"],
    message: "Passwords do not match",
  }
);

type ChangePasswordFormValues = z.infer<typeof changePasswordSchema>;

function PasswordSecurity() {
  const form = useForm<ChangePasswordFormValues>({
    resolver: zodResolver(changePasswordSchema),
    defaultValues: {
      currentPassword: "",
      newPassword: "",
      confirmPassword: "",
    },
  });
  const onSubmit = (data: ChangePasswordFormValues) => {
    console.log(data);
    // Aquí puedes manejar el cambio de contraseña
    if (data.newPassword !== data.confirmPassword) {
      console.error("Las contraseñas no coinciden");
      return;
    }
  };
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-100 space-y-8 my-20">
      {/* Contenedor principal que limita el ancho del contenido a 1100px */}
      <div className="w-full max-w-5xl">
        {/* h1 alineado a la izquierda y con un ancho máximo de 1100px */}
        <h1 className="w-full text-left text-3xl font-bold mt-4 mb-4">
          Cambiar mi contraseña
        </h1>

        {/* Párrafo debajo del h1 */}
        <p className="w-full text-left text-gray-600">
          Te recomendamos que por tu seguridad, elijas una contraseña única que
          no uses para conectarte a otras cuentas.
        </p>
      </div>

      {/* Cuadro de alerta */}
      <div className="w-full max-w-2xl p-4">
        <Alert className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 rounded">
          <AlertTitle>¡Atención!</AlertTitle>
          <AlertDescription>
            Recuerda que tienes un numero limitado de intentos. Números de
            Intentos: 3.
          </AlertDescription>
        </Alert>
      </div>
      {/* Formulario centrado con un ancho máximo de 750px */}
      <div className="w-full max-w-2xl bg-white p-8 rounded-lg shadow-md">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            {/* Campo para la contraseña actual */}
            <FormField
              control={form.control}
              name="currentPassword"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Contraseña actual</FormLabel>
                  <div className="relative">
                    <FormControl>
                      <Input
                        type={showCurrentPassword ? "text" : "password"}
                        placeholder="••••••••"
                        {...field}
                      />
                    </FormControl>
                    {/* Ícono de ojo para mostrar/ocultar contraseña */}
                    <span
                      className="absolute inset-y-0 right-3 flex items-center cursor-pointer"
                      onClick={() =>
                        setShowCurrentPassword(!showCurrentPassword)
                      }
                    >
                      {showCurrentPassword ? (
                        <AiOutlineEyeInvisible className="h-5 w-5 text-gray-500" />
                      ) : (
                        <AiOutlineEye className="h-5 w-5 text-gray-500" />
                      )}
                    </span>
                  </div>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Campo para la nueva contraseña */}
            <FormField
              control={form.control}
              name="newPassword"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nueva contraseña</FormLabel>
                  <div className="relative">
                    <FormControl>
                      <Input
                        type={showNewPassword ? "text" : "password"}
                        placeholder="••••••••"
                        {...field}
                      />
                    </FormControl>
                    <span
                      className="absolute inset-y-0 right-3 flex items-center cursor-pointer"
                      onClick={() => setShowNewPassword(!showNewPassword)}
                    >
                      {showNewPassword ? (
                        <AiOutlineEyeInvisible className="h-5 w-5 text-gray-500" />
                      ) : (
                        <AiOutlineEye className="h-5 w-5 text-gray-500" />
                      )}
                    </span>
                  </div>
                  <FormDescription>
                    <ul className="list-disc list-inside">
                      <li>8 a 20 caracteres</li>
                      <li>
                        Debes incluir mínimo una mayúscula, una minúscula y un
                        número
                      </li>
                      <li>No compartas tu contraseña con nadie</li>
                    </ul>
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            {/* Campo para confirmar la nueva contraseña */}
            <FormField
              control={form.control}
              name="confirmPassword"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Confirmar nueva contraseña</FormLabel>
                  <div className="relative">
                    <FormControl>
                      <Input
                        type={showConfirmPassword ? "text" : "password"}
                        placeholder="••••••••"
                        {...field}
                      />
                    </FormControl>
                    <span
                      className="absolute inset-y-0 right-3 flex items-center cursor-pointer"
                      onClick={() =>
                        setShowConfirmPassword(!showConfirmPassword)
                      }
                    >
                      {showConfirmPassword ? (
                        <AiOutlineEyeInvisible className="h-5 w-5 text-gray-500" />
                      ) : (
                        <AiOutlineEye className="h-5 w-5 text-gray-500" />
                      )}
                    </span>
                  </div>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" className="w-full">
              Cambiar contraseña
            </Button>
          </form>
        </Form>
      </div>

      {/* Sección de autenticación de dos pasos */}
      <div className="w-full max-w-5xl bg-white p-6 mt-8">
        <h2 className="text-2xl font-bold mb-4">Autenticación en Dos Pasos</h2>
        <p className="mb-6 text-gray-600">
          Mejora la seguridad de tu cuenta con la autenticación en dos pasos.
          Elige cómo quieres que te enviemos un código de verificación.
        </p>

        <div className="space-y-8">
          {/* Verificación por SMS */}
          <div className="flex flex-col md:flex-row items-start md:items-center md:space-x-4">
            <img src="" alt="Autenticación por SMS" className="w-24 h-auto" />
            <div className="flex-1">
              <h3 className="text-lg font-semibold">
                Autenticación por código SMS
              </h3>
              <p className="text-gray-600 mb-2">
                Usa tu número de teléfono como método de autenticación en dos
                pasos (2FA). Tendrás que introducir el código de seguridad que
                te enviaremos por SMS.
              </p>
            </div>
            <div className="mt-2 md:mt-0">
              <Button className="w-full md:w-48">Verificar SMS</Button>
            </div>
          </div>

          {/* Verificación por correo */}
          <div className="flex flex-col md:flex-row items-start md:items-center md:space-x-4">
            <img
              src=""
              alt="Autenticación por correo"
              className="w-24 h-auto"
            />
            <div className="flex-1">
              <h3 className="text-lg font-semibold">
                Autenticación por correo electrónico
              </h3>
              <p className="text-gray-600 mb-2">
                Utiliza el código de seguridad enviado a tu dirección de correo
                electrónico como método de autenticación en dos pasos (2FA).
              </p>
            </div>
            <div className="mt-2 md:mt-0">
              <Button className="w-full md:w-48">Verificar correo</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PasswordSecurity;
