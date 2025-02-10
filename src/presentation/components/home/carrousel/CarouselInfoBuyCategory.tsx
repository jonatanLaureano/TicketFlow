/* import { Button } from "@/presentation/components/ui/button"; */
import { TypographyP } from "@/presentation/components/shared/typography";
import { Button } from "../../ui/button";

type Props = {
  event: {
    id: number;
    name: string;
    description: string;
    image: string;
  };
};

export default function CorouselInfoBuyCategory({ event }: Props) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2">
      {/* Sección de la imagen */}
      <div className="relative flex items-center justify-center w-full h-[400px] md:h-[800px]">
        <img
          src={event.image}
          alt="img category"
          className="object-cover h-full w-full"
          loading="lazy"
        />
      </div>
      {/* Sección del texto */}
      <div className=" flex flex-col justify-center bg-black p-8">
        <div className="md:p-16 lg:p-24">
          <TypographyP className="uppercase font-bungee text-[#E1B414] text-2xl md:text-6xl mb-2">
            {event.name}
          </TypographyP>

          <TypographyP className="text-white mt-4 text-base md:text-lg">
            {event.description}
          </TypographyP>

          <Button className="bg-[#5D2994] text-white mt-3 px-6 py-2 transition duration-700 sm:text-sm">
            Comprar
          </Button>
        </div>
      </div>
    </div>
  );
}
