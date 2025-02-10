import { Facebook, Instagram, Twitter } from "lucide-react";
export const Social = () => {
  return (
    <div className="flex flex-col items-center lg:items-start">
      <div className="w-auto flex flex-col items-center flex-1">
        <img
          src="https://osdagas.com/wp-content/uploads/2022/01/libro-de-reclamaciones.png"
          alt="Libro de erclamaciones"
          className="mb-4 w-[14rem] md:w-[10rem]"
        />
        <div className="flex gap-4 justify-center w-full mt-3">
          <Facebook className="w-7 h-7" />
          <Instagram className="w-7 h-7" />
          <Twitter className="w-7 h-7" />
        </div>
      </div>
    </div>
  );
};
