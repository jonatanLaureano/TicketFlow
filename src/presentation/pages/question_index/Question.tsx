import SectionEvents from '@/presentation/components/question/sections/SectionEvents';
import SectionLogin from '@/presentation/components/question/sections/SectionLogin';
import SectionSales from '@/presentation/components/question/sections/SectionSales';

export const Question = () => {
  return (
    <div className='m-5 py-10 pl-10 pr-3 md:px-32 bg-slate-200'>
      <h1 className="font-bold text-[48px] mb-8">Preguntas Frecuentes</h1>
      <SectionEvents />
      <SectionLogin />
      <SectionSales />
    </div>
  );
};
