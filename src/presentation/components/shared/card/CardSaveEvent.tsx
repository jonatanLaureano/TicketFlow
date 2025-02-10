import { Button } from '../../ui/button';
import { Card, CardContent, CardFooter, CardHeader } from '../../ui/card';
import { Event } from '@/infrastructure/interfaces/apiEvent.response';

const CardSaveEvent = ({ eventName, url }: Event) => {
  return (
    <Card
      className="p-1 bg-white border border-default-200 drop-shadow-lg rounded-sm overflow-hidden transform-gpu transition duration-200"
    >
      <CardHeader className="p-1 text-xl text-start">
        {eventName}
      </CardHeader>

      <CardContent className="p-1 relative">
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <div className="rounded-sm px-11 py-1 font-semibold bg-purple-400 text-black select-none hover:bg-purple-500">
            Activo
          </div>
        </div>
        <img
          src={url}
          alt=""
          className="grayscale w-full h-[200px] object-cover object-center"
        />
        <div className="flex justify-between my-2">
          <p className="text-gray-600">{'Creación: 22/10/23'}</p>
          <p className="text-gray-600">{'Finaliza: 29/09/23'}</p>
        </div>
      </CardContent>

      <CardFooter className="p-1 grid grid-cols-1">
        <div className="grid grid-cols-2 gap-9">
          <Button className="border-[2.4px] border-[#624393] hover:bg-[#624393] text-base text-[#624393] bg-transparent hover:text-white">
            Editar Evento
          </Button>
          <Button className="border-[2.4px] border-[#624393] hover:bg-[#624393] text-base text-[#624393] bg-transparent hover:text-white">
            Renovar Evento
          </Button>
        </div>
        <Button
          size="lg"
          className="flex mx-28 px-10 w-auto text-base font-normal hover:bg-[#472280] bg-[#624393] min-w-28 rounded-sm self-end mt-4"
        >
          Panel de Control
        </Button>
      </CardFooter>
    </Card>
  );
};

export default CardSaveEvent;
