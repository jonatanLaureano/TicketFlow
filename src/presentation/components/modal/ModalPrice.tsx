import { SelectPrice } from '../shared/selects';
import { Button } from '../ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from '../ui/dialog';

export const ModalPrice = () => {
  return (
    <Dialog>
      <DialogTrigger className="border-2 border-gray-300 hover:bg-gray-300 px-20 py-1 rounded-sm">
        <img
          src="./database.svg"
          className="justify-center items-center inline-block  size-4 mr-2"
          alt="iconDatabase"
        />
        Precio
      </DialogTrigger>

      <DialogContent className="max-w-5xl pl-[100px] pr-28 bg-white">
        <DialogHeader className="pt-10">
          <DialogTitle className="font-bold mt-1.5 mb-10 grid-cols-1">
            Rango de precios
            <p className="text-sm font-normal mt-3">
              El precio promedio de los eventos varia entre:
            </p>
          </DialogTitle>
        </DialogHeader>

        <SelectPrice />

        <DialogFooter className="flex justify-end mt-7 mb-9">
          <Button
            type="submit"
            className="hover:bg-[#472280] bg-[#624393] px-10"
          >
            Realizar busqueda
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
