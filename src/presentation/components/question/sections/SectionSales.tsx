import questions from './questions.json';
import AccordionSection from './AccordionSection';

export default function SectionSales() {
  const { questions: eventQuestions, img } = questions.Sales;

  return (
    <AccordionSection
      title="Venta de Entradas"
      questions={eventQuestions}
      imgSrc={img}
    />
  );
}
