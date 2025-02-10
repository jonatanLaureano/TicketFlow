import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/presentation/components/ui/carousel";
import CarouselInfo from "./CarouselInfo";
import { events } from "../../shared/fakeapis/bd";
import Autoplay from "embla-carousel-autoplay";
import Fade from "embla-carousel-fade";

export function CarouselEvents() {
  return (
    <Carousel
      opts={{
        loop: true, // Habilitar el ciclo
      }}
      plugins={[
        Autoplay({
          delay: 3000,
        }),
        Fade(), // Agrega el plugin de fade
      ]}
      className="w-full h-[600px] md:h-[800px] relative mb-16 borde"
    >
      <CarouselContent className="w-full h-full -ml-0 pl-0 ">
        {events.map((event, index) => (
          <CarouselItem
            key={index} // Añadir una clave única para optimización
            className="basis-auto min-w-full flex items-center justify-center h-full p-0 m-0"
          >
            <CarouselInfo key={index} event={event} />
          </CarouselItem>
        ))}
      </CarouselContent>

      {/* Botones de navegación (mueve el comentario arriba del JSX si da problemas) */}
      <CarouselPrevious className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 text-yellow-500" />
      <CarouselNext className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 text-yellow-500" />
    </Carousel>
  );
}