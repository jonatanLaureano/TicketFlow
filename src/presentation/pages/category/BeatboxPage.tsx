import { SectionRecent } from "@/presentation/components/home/sections";
import { SelectSearch } from "@/presentation/components/shared/selects";
import { Button } from "@/presentation/components/ui/button";

export default function BeatboxPage() {
  return (
    <>
      <section className="pt-20">
        <h1 className="text-2xl font-bold tracking-tight lg:text-3xl uppercase m-5">
          BeatboxPage
        </h1>
      </section>
      <section className="pt-10">
        <SelectSearch viewLocal={false} viewValue={true} />
      </section>
      <SectionRecent />
      <div className="flex justify-center mb-16">
        <Button className="w-[20%] text-2xl p-8 bg-[#624393]">
          Cargar más eventos
        </Button>
      </div>
    </>
  );
}
