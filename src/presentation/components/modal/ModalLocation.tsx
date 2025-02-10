import { Button } from '../ui/button';
import { SelectFilters } from '../shared/selects';
import { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from '../ui/dialog';
import { Input } from '../ui/input';
import { CiSearch } from 'react-icons/ci';

export const ModalLocation = () => {
  const [visibleContent, setVisibleContent] = useState('city'); // Inicializar el estado con una cadena vacía

  return (
    <Dialog>
      <DialogTrigger className="border-2 border-gray-300 hover:bg-gray-300 px-20 py-1 rounded-sm">
        <img
          src="/iconLocation.svg"
          className="justify-center items-center inline-block size-4 mr-2"
          alt="iconLocation"
        />
        Lugar
      </DialogTrigger>
      <DialogContent className="max-w-5xl pl-[100px] pr-28 bg-white">
        <DialogHeader className="pt-10">
          <DialogTitle className="flex mt-1.5 mb-10 gap-5 justify-center">
            <Button
              className={`font-normal text-base py-6 px-7 border-2 hover:bg-gray-200 ${
                visibleContent === 'city'
                  ? 'bg-gray-300 text-black border-gray-300'
                  : 'bg-transparent text-black border-gray-300 hover:bg-gray-100'
              }`}
              onClick={() => setVisibleContent('city')}
            >
              Ciudad y distrito
            </Button>
            <Button
              className={`font-normal text-base py-6 px-7 border-2 hover:bg-gray-200 ${
                visibleContent === 'search'
                  ? 'bg-gray-300 text-black border-gray-300'
                  : 'bg-transparent text-black border-gray-300 hover:bg-gray-100'
              }`}
              onClick={() => setVisibleContent('search')}
            >
              Búsqueda específica
            </Button>
             <Button
              className={`font-normal text-base py-6 px-7 border-2 hover:bg-gray-200  ${
                visibleContent === 'location'
                  ? 'bg-gray-300 text-black border-gray-300'
                  : 'bg-transparent text-black border-gray-300 hover:bg-gray-100'
              }`}
              onClick={() => setVisibleContent('location')}
            >
              Ubicación actual
            </Button>
          </DialogTitle>
        </DialogHeader>

        {visibleContent === 'city' && <SelectFilters />}

        {visibleContent === 'search' && (
          <div className="justify-center flex px-52 py-[27.5px]">
            <Input
              className="border-purple-200 hover:border-purple-500 border-2 focus:outline-none"
              placeholder="Escribir lugar"
            />
            <div className="right-1/3 absolute py-2">
              <CiSearch className="text-xl" style={{ strokeWidth: 2 }} />
            </div>
          </div>
        )}

        {visibleContent === 'location' && (
          <Button className="text-base mx-52 my-[27.5px] items-center gap-3 bg-[#7231A7] hover:bg-[#7231A7] font-light text-white">
            <img
              src="/iconLocationCrosshair.svg"
              alt="iconLocation"
              className="size-4"
            />
            Buscar por ubicación actual
          </Button>
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
