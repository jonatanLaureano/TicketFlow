import { Button } from '../ui/button';
import { SelectDate } from '../shared/selects';
import { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from '../ui/dialog';

export const ModalDate = () => {
  const [visible, setVisible] = useState(false);
  const message = 'Selecciona una fecha dando click en el calendario';

  return (
    <Dialog>
      <DialogTrigger className="border-2 border-gray-300 hover:bg-gray-300 px-20 py-1 rounded-sm">
        <img
          src="/iconCalendar2.svg"
          className="justify-center items-center inline-block size-4 mr-2"
          alt="calendar icon"
        />
        Fecha
      </DialogTrigger>
      <DialogContent className="max-w-5xl pl-[100px] pr-28 bg-white">
        <DialogHeader className="pt-5 pb-7">
          <DialogTitle className="flex mt-1.5 mb-10 gap-5 justify-center">
            <Button
              className={`font-normal text-base py-6 px-7 border-2 hover:bg-gray-200 ${
                visible ? 'bg-transparent text-black border-gray-300 hover:bg-gray-100' : 'bg-gray-300 text-black border-gray-300'
              }`}
              onClick={() => setVisible(false)}
            >
              Rango de Fecha
            </Button>
           <Button
              className={`font-normal text-base py-6 px-7 border-2 hover:bg-gray-200 ${
                visible ? 'bg-gray-300 text-black border-gray-300' : 'bg-transparent text-black border-gray-300 hover:bg-gray-100'
              }`}
              onClick={() => setVisible(true)}
            >
              Fecha específica
            </Button>
          </DialogTitle>
        </DialogHeader>

        {visible ? (
          <div className="justify-center flex">
            <div>
              <DialogTitle className="pb-2">Fecha única</DialogTitle>
              <SelectDate />
              <p className="text-[11px] pt-2">{message}</p>
            </div>
          </div>
        ) : (
          <div className="gap-14 grid-cols-2 grid">
            <div>
              <DialogTitle className="pb-2">Fecha Inicio</DialogTitle>
              <SelectDate />
              <p className="text-[11px] pt-2">{message}</p>
            </div>
            <div>
              <DialogTitle className="pb-2">Fecha Final</DialogTitle>
              <SelectDate />
              <p className="text-[11px] pt-2">{message}</p>
            </div>
          </div>
        )}

        <DialogFooter className="flex justify-end mt-7 mb-9">
          <Button
            type="submit"
            className="hover:bg-[#472280] bg-[#624393] px-10"
          >
            Realizar búsqueda
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
