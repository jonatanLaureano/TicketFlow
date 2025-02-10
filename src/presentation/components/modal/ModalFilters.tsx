import { SelectFilters } from '../shared/selects';
import { Button } from '../ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from '../ui/dialog';

export const ModalFilters = () => {
  const sortOptions = [
    'Popularidad',
    'Fecha de Lanzamiento',
    'Alfabéticamente',
  ];

  return (
    <Dialog>
      <DialogTrigger className="border-2 border-gray-300 hover:bg-gray-300 px-20 py-1 rounded-sm">
        Filtros
      </DialogTrigger>

      <DialogContent className="max-w-5xl pl-[100px] pr-28 bg-white">
        <DialogHeader className="pt-10">
          <DialogTitle className="flex gap-8 mt-1.5 mb-10">
            {sortOptions.map((option) => (
              <Button
                key={option}
                className="text-black hover:bg-gray-300 bg-gray-300 text-base"
              >
                {option}
              </Button>
            ))}
          </DialogTitle>
        </DialogHeader>

        <SelectFilters />

        <DialogFooter className="flex justify-end mt-7 mb-9">
          <Button
            type="submit"
            className="hover:bg-[#472280] bg-[#624393] px-10"
          >
            Filtrar
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
