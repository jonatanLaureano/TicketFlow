import { DialogTitle } from '@radix-ui/react-dialog';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/presentation/components/ui/select';
import { SelectGroup } from '@radix-ui/react-select';

export const SelectPrice = () => {
  const priceMin = ['S/. 20.00'];
  const priceMax = ['S/. 200.00'];

  return (
    <div className="grid-cols-2 gap-14 flex">
      <div>
        <DialogTitle className="pb-2">Precio mínimo</DialogTitle>
        <Select>
          <SelectTrigger className="border-purple-200 hover:border-purple-300 border-2 bg-transparent w-96">
            <SelectValue placeholder={priceMin} />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value="priceMin">{priceMin}</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
        <p className="text-[11px] pt-2">Monto mínimo sugerido: {priceMin}</p>
      </div>

      <div>
        <DialogTitle className="pb-2">Precio máximo</DialogTitle>
        <Select>
          <SelectTrigger className="border-purple-200 hover:border-purple-300 border-2 bg-transparent w-96">
            <SelectValue placeholder={`${priceMax} +`} />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value="priceMax">{priceMax}</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
        <p className="text-[10px] pt-2">Monto máximo sugerido: {priceMax}</p>
      </div>
    </div>
  );
};
