import { CardCollective } from '@/presentation/components/shared/card/CardCollective';
import { SelectColectivos } from '@/presentation/components/shared/selects/SelectColectivos';

export const ColectivoPage = () => {
  return (
    <>
      <section className="pt-20">
        <h1 className="text-2xl font-bold tracking-tight lg:text-3xl uppercase m-5">
          Colectivos
        </h1>
      </section>
      <section className="pt-10">
        <SelectColectivos />
      </section>
      <CardCollective />
    </>
  );
};
