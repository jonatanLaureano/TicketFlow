import questions from './questions.json';
import AccordionSection from './AccordionSection';

export default function SectionLogin() {
  const { questions: eventQuestions, img } = questions.Login;

  return (
    <AccordionSection
      title="Inicio de Sesión"
      questions={eventQuestions}
      imgSrc={img}
    />
  );
}
