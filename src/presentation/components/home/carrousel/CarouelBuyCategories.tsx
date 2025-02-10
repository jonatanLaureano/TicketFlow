import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/presentation/components/ui/carousel";
/* import { Button } from "../../ui/button"; */
import { category } from "../../shared/slider/category";
import Autoplay from "embla-carousel-autoplay";
import Fade from "embla-carousel-fade";
import CorouselInfoBuyCategory from "./CarouselInfoBuyCategory";

export function CorouelBuyCategories() {
  return (
    <Carousel
      opts={{
        loop: true, // Habilitar el ciclo
      }}
      plugins={[
        Autoplay({
          delay: 9000000,
        }),
        Fade(), // Agrega el plugin de fade
      ]}
      className="w-full h-[600px] md:h-[800px] border-2 mb-32 sm:mb-20 md:mb-12 lg:mb-16" // Ajuste de altura para ser más flexible
    >
      <CarouselContent className="!ml-0">
        {category.map((event, index) => (
          <CarouselItem
            key={index} // Añadir una clave única para optimización
            className="w-full flex items-center justify-center h-full p-0 m-0 "
          >
            <CorouselInfoBuyCategory key={index} event={event} />
          </CarouselItem>
        ))}
      </CarouselContent>

      {/* Botones de navegación */}
      <CarouselPrevious className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 text-yellow-500" />
      <CarouselNext className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 text-yellow-500" />
    </Carousel>
  );
}
