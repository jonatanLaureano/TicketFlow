import { Input } from "@/presentation/components/ui/input";
import { Textarea } from "@/presentation/components/ui/textarea";
import { buttonVariants } from "../ui/button";

export const Contact = () => {
  return (
    <div className="flex flex-col items-start p-0 w-full col-span-3 md:col-span-2 lg:col-span-2">
      <div className="w-full flex flex-col items-start flex-1">
        <h1 className="text-1xl font-bold tracking-tight lg:text-2xl mb-4">
          Contáctenos
        </h1>
        <form action="" className="flex flex-col gap-4 p-0 w-full">
          <Input
            type="text"
            placeholder="ej. Luis Rivera"
            className="w-full p-3 bg-gray-100 text-gray-700 rounded-md focus:outline-none focus:ring-2"
          />
          <Input
            type="email"
            placeholder="ej. ejemplo@ejemplo.com"
            className="w-full p-3 bg-gray-100 text-gray-700 rounded-md focus:outline-none focus:ring-2"
          />
          <Textarea
            placeholder="ej. Como puedo crear mi evento?"
            className="w-full p-3 h-32 bg-gray-100 text-gray-700 rounded-md focus:outline-none focus:ring-2 resize-none"
          />
          <Input
            type="submit"
            value="Enviar"
            className={buttonVariants({ variant: "default" }) + " self-end"}
          />
        </form>
      </div>
    </div>
  );
};
