import questions from './questions.json';
import AccordionSection from './AccordionSection';

export default function SectionEvents() {
  const { questions: eventQuestions, img } = questions.Events;

  return (
    <AccordionSection
      title="Eventos"
      questions={eventQuestions}
      imgSrc={img}
    />
  );
}
