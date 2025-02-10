// import { Link } from "react-router-dom";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../../ui/carousel";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/presentation/components/ui/avatar";

export const CarouselSponsors = () => {
  return (
    <Carousel className="w-[calc(100dvw-2rem)] lg:w-[70dvw] justify-center mx-0 my-2 relative overflow-hidden py-3">
      <CarouselContent className="flex flex-nowrap mx-0 gap-4 items-center min-h-16 p-0">
        {Array.from({ length: 10 }).map((_, index) => (
          <CarouselItem
            key={index}
            className="w-1/2 max-w-[calc(90dvw-3.5rem)] md:max-w-[calc(50%-3.5rem)] 2xl:max-w-[calc(40%-3.5rem)] flex flex-col gap-2 p-4
						text-default-800 items-start justify-center
						bg-transparent rounded-md border-default-400 border mx-2"
          >
            <div className="flex items-center gap-2">
              <Avatar className="select-none">
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <div className="flex flex-col">
                <p className="font-bold text-md text-default-800">Luis eduardo perez</p>
                <p className="text-[0.85rem] text-default-500">Frontend Developer Senior</p>
              </div>
            </div>
            <div >
              ¡Me encanta esta idea! Es genial tener una nueva herramienta para
              ver si encajamos bien en un trabajo. Recibir feedback antes de
              aplicar realmente puede marcar la diferencia en nuestra búsqueda
              de empleo.
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious
        className="md:flex absolute left-4 top-1/2 z-30 
              bg-white hover:bg-default-100 text-default-700 
              hover:text-black w-12 h-12 rounded-full 
              text-xl shadow-lg"
      />
      <CarouselNext
        className="md:flex absolute right-4 top-1/2 z-20 
              bg-white hover:bg-default-100 text-default-700 
              hover:text-black w-12 h-12 rounded-full 
              text-xl shadow-lg"
      />
    </Carousel>
  );
};
