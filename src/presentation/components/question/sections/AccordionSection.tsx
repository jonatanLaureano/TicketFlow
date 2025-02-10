import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@radix-ui/react-accordion';
import { useState } from 'react';

type QuestionData = {
  question: string;
  description: string[];
};

type AccordionSectionProps = {
  title: string;
  questions: QuestionData[];
  imgSrc: string;
};

export default function AccordionSection({ title, questions, imgSrc }: AccordionSectionProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <>
      <h1 className="font-medium text-3xl md:text-5xl">{title}</h1>
      <div className='flex justify-between'>
        <Accordion
          type="single"
          collapsible
          className="relative mb-36"
        >
          <ul className="h-auto max-w-max">
            {questions.map(({ question, description }, index) => {
              const isActive = activeIndex === index;

              return (
                <AccordionItem
                  key={index}
                  value={`item-${index + 1}`}
                  className="mb-4"
                >
                  <AccordionTrigger
                    className={`justify-between mt-4 items-center backdrop:items-center flex text-xs md:text-xl pb-[9px] w-[700px] border-b-2 ${isActive ? 'border-b-transparent' : 'border-b-purple-800'}`}
                    onClick={() => setActiveIndex(isActive ? null : index)}
                  >
                    <p className='text-start w-[690px]'>{question}</p>
                    <button className="rounded-full">
                      <img
                        className="size-10"
                        src="/iconCirclePlus.svg"
                        alt="Expand"
                      />
                    </button>
                  </AccordionTrigger>
                  <AccordionContent className={`text-xs md:text-base text-gray-700 w-[700px] transition-all pb-5 duration-300 ${isActive ? 'border-b-2 border-b-purple-800' : ''}`}>
                    <ul className='list-disc pl-14'> {description.map((desc, i) => (<li key={i}>{desc}</li>))} </ul>
                  </AccordionContent>
                </AccordionItem>
              );
            })}
          </ul>
        </Accordion>
        <img className="ml-10 size-32 md:size-56" src={imgSrc} alt="imgEvent" />
      </div>
    </>
  );
}
