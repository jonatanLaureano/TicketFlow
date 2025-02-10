import { SectionRecent } from "@/presentation/components/home/sections";
import { SelectSearch } from "@/presentation/components/shared/selects";
import { Button } from "@/presentation/components/ui/button";

export const FeaturedPage = () => {
  return (
    <>
      <section className="pt-20">
        <h1 className="text-2xl font-bold tracking-tight lg:text-3xl uppercase m-5">
          Destacados
        </h1>
      </section>
      <section className="pt-10">
        <SelectSearch viewLocal={true} viewValue={false} />
      </section>
      <SectionRecent />
      <div className="flex justify-center">
        <Button size="lg"
          className="py-8 text-2xl font-medium items-center text-center hover:bg-[#472280] mb-[70px] bg-[#624393] px-10">Cargar más eventos</Button>
      </div>
    </>
  );
};
