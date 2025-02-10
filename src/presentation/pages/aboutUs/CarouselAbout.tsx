import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/presentation/components/ui/carousel";
import { TypographyP } from "../../components/shared/typography";
import { SyntheticEvent, useState } from "react";
import { slides } from "@/presentation/components/shared/fakeapis/bd";

export function CarouselAbout() {
  const [activeIndex, setActiveIndex] = useState(0);
  const handleDotClick = (index: number) => {
    setActiveIndex(index);
  };
  const handleSelect = (event: SyntheticEvent<HTMLDivElement, Event>) => {
    const newIndex = event.currentTarget.dataset.index;
    setActiveIndex(Number(newIndex));
  };

  return (
    <div className="relative w-full mx-2 my-2">
      <TypographyP className="text-center text-4xl font-medium mb-4">
        Lorem Input
      </TypographyP>
      <Carousel activeIndex={activeIndex} onSelect={handleSelect}>
        <CarouselContent className="w-full h-full">
          {slides.map((slide, index) => (
            <CarouselItem
              key={index}
              data-index={index}
              className={`min-w-full flex items-center justify-center h-full ${
                activeIndex === index ? "block" : "hidden"
              }`}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 h-full w-full">
                {/* Sección del texto */}
                <div className="flex flex-col items-center md:items-start justify-center md:justify-start bg-purple-400 p-6 sm:p-8 h-full w-full">
                  <p className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mt-4 text-center md:text-left mb-8">
                    {slide.title}
                  </p>
                  <p className="text-white text-center md:text-left text-lg sm:text-xl md:text-2xl mb-8">
                    {slide.description}
                  </p>
                </div>
                {/* Sección de la imagen */}
                <div className="relative bg-purple-200 flex items-center justify-center h-full w-full">
                  <img
                    src={slide.imageUrl}
                    alt="img category"
                    className="object-cover h-full w-full"
                  />
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      {/* Rectángulos de navegación */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <div
            key={index}
            className={`w-10 h-3 cursor-pointer ${
              activeIndex === index ? "bg-white" : "bg-gray-400"
            }`}
            onClick={() => handleDotClick(index)}
          />
        ))}
      </div>
    </div>
  );
}
