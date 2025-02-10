import { Link } from "react-router-dom";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../../ui/carousel";

export const CarouselCategories = () => {
  const itemsText = [
    "Batallas callejera",
    " Colectivos",
    "Batallas 4x4",
    "PR vs Raptonda",
    " Colectivos",
    " Colectivos",
    " Colectivos",
    " Colectivos",
    " Colectivos",
    " Colectivos",
  ];

  return (
    <Carousel className="bg-purple-800 px-4 lg:px-20 w-[calc(100dvw-2rem)] lg:w-[93dvw] justify-center mx-0 my-2 relative overflow-hidden py-6">
      <CarouselContent className="gap-0.5 md:gap-7 items-center min-h-25 px-5 ">
        {itemsText.map((item, index) => (
          <CarouselItem
            key={index}
            className="basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/6 flex 
						text-white items-center justify-center 
						bg-purple-800 p-4 border-2 border-white mx-2 md:mx-4 text-sm md:text-base px-4 md:px-6"
          >
            <Link to="/">{item}</Link>
          </CarouselItem>
        ))}
      </CarouselContent>

      <CarouselPrevious
        className="hidden lg:flex absolute left-1
			top-1/2 transform-translate-y-1/2 z-20 bg-yellow-500 hover:bg-yellow-600 
			text-white hover:text-white w-12 h-12 rounded-full 
  			items-center justify-center text-xl"
      />

      <CarouselNext
        className="absolute right-2 sm:right-3 md:right-1 top-1/2 
				bg-yellow-500 hover:bg-yellow-600 
				text-white w-10 h-10 md:w-12 md:h-12"
      />
    </Carousel>
  );
};
