import { CarouselCategories, CarouselEvents } from "../carrousel";

export const SectionInfo = () => {
  return (
    <section className="w-full flex flex-col items-center min-h-dvh overflow-hidden">
      <CarouselEvents />
      <CarouselCategories />
    </section>
  );
};
