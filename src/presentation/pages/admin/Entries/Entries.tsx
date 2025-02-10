import { SelectSearch } from "@/presentation/components/shared/selects";
import { TypographyH1 } from "@/presentation/components/shared/typography";
import { Carousel } from "@/presentation/components/ui/carousel";

export const Entries = () => {
  return (
    <Carousel className="pt-20">
      <TypographyH1 className="tracking-tight lg:text-3xl m-5">
        MIS ENTRADAS
      </TypographyH1>

      <section className="pt-10 mb-10">
        <SelectSearch viewLocal={false} viewValue={true} />
      </section>
    </Carousel>
  );
};
