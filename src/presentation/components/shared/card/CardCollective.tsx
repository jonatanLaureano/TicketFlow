import { events } from '@/config/const';
import { TypographyP } from '../typography';
/* import { RecentCard } from "../../shared/card/RecentCard"; */
import { Button } from '../../ui/button';
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from '@/presentation/components/ui/avatar';

export const CardCollective = () => {
  return (
    <>
      <div className="grid mx-3 grid-cols-1 gap-y-12 gap-x-5 p-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {events.map(({ id, eventName, url, descriptionEvent }) => (
          <div
            key={id}
            className="bg-white border border-default-200 drop-shadow-lg rounded-sm overflow-hidden transform-gpu transition duration-200"
          >
            <h2 className="text-2xl text-center font-semibold p-2.5">
              {eventName}
            </h2> 
            <div className="relative">
              <Avatar className="w-8 h-8 absolute shadow-lg shadow-default-800/60 top-3 right-3">
                <AvatarImage src={url} alt="@shadcn" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <div className="mx-2.5">
                <img
                  src={url}
                  alt={eventName}
                  className="rounded-sm h-96 object-cover"
                />
              </div>
            </div>
            <div className="py-2 flex flex-col relative mx-2.5">
              <div className="">
                <TypographyP className="font-semibold">Descripcion</TypographyP>
                <p className="text-gray-600">{descriptionEvent}</p>
              </div>
              <Button
                size="lg"
                className="px-10 w-auto text-base font-normal hover:bg-[#472280] bg-[#624393] min-w-28 rounded-sm self-end mt-4"
              >
                Ver más
              </Button>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center">
        <Button
          size="lg"
          className="py-8 text-2xl font-medium items-center text-center hover:bg-[#472280] bg-[#624393] mt-7 mb-[60px] px-20"
        >
          Mostrar más
        </Button>
      </div>
    </>
  );
};
