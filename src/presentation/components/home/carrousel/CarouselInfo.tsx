import { Button } from "@/components/ui/button";
import { TypographyP } from "@/presentation/components/shared/typography";

type Props = {
  event: {
    name: string;
    date: string;
    location: string;
    description: string;
    images: string;
    price: number;
    originalPrice: number;
  };
};

function CarouselInfo({ event }: Props) {
  return (
    <div className="relative w-full h-[600px] md:h-[800px] flex flex-col border">
      <img
        src={event.images}
        alt={`Imagen del evento ${event.name}`}
        className="w-full h-[600px] md:h-[800px] object-cover"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="absolute inset-0 flex flex-col justify-center items-center lg:items-end p-4 lg:pr-28 sm:items-center">
        {/* Contenedor principal para la alineación en Y */}
        <div className="flex flex-col items-center lg:items-end text-center lg:text-right w-full">
          <TypographyP className="text-white font-abeezee md:text-xl my-2 sm:text-lg">
            {event.location} - {event.date}
          </TypographyP>
          <TypographyP className="uppercase font-bungee text-[#E1B414] md:text-4xl mb-2 sm:text-3xl">
            {event.name}
          </TypographyP>
          <TypographyP className="text-[#FFFFFFE5] md:text-base sm:text-sm w-[90%] max-w-[300px] font-semibold mb-4 font-nunito">
            {event.description}
          </TypographyP>
          <div className="flex flex-col sm:flex-row justify-center lg:justify-end items-center mb-4">
            <TypographyP className="text-[#AB7ED1] text-2xl md:text-3xl">
              S/{event.price}
            </TypographyP>
            <TypographyP className="line-through ml-0 sm:ml-4 text-[#A7A5A6] sm:text-base">
              S/{event.originalPrice}
            </TypographyP>
          </div>
          <Button className="bg-[#AB7ED1D9] hover:bg-[#5D2994] text-white px-6 py-2 transition duration-700 sm:text-sm">
            Comprar
          </Button>
        </div>
      </div>
    </div>
  );
}

export default CarouselInfo;
