import CardSaveEvent from "../../shared/card/CardSaveEvent";
import { events } from '@/config/const';

export const SectionMyEvents = () => {
  return (
    <section className="mb-10">
        <div className="mx-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-[100%]">
          {events.map((event) => (
            <CardSaveEvent key={event.id} {...event} />
          ))}
        </div>
    </section>
  )
}

