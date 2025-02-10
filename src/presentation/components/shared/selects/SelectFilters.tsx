import { DialogTitle } from '@radix-ui/react-dialog';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/presentation/components/ui/select';
import { SelectGroup } from '@radix-ui/react-select';

export const SelectFilters = () => {
  const locations = {
    cities: ['Lima', 'Arequipa', 'Tacna', 'Cajamarca'],
    districts: ['Surco', 'Miraflores', 'Jesus María', 'San Juan de Lurigancho'],
  };

  return (
    <div className="gap-14 grid-cols-2 grid">
      <div>
        <DialogTitle className="pb-2">Seleccione la ciudad</DialogTitle>
        <Select>
          <SelectTrigger className="border-purple-200 hover:border-purple-300 border-2 bg-transparent w-96">
            <SelectValue placeholder="Seleccionar Ciudad" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              {locations.cities.map((city) => (
                <SelectItem key={city} value={city}>
                  {city}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
        <p className="text-[10px] pt-2">Escoge una ciudad</p>
      </div>

      <div>
        <DialogTitle className="pb-2">Seleccione el distrito</DialogTitle>
        <Select>
          <SelectTrigger className="border-purple-200 hover:border-purple-300 border-2 bg-transparent w-96">
            <SelectValue placeholder="Seleccionar Distrito" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              {locations.districts.map((district) => (
                <SelectItem key={district} value={district}>
                  {district}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
        <p className="text-[10px] pt-2">
          No olvides seleccionar la ciudad para poder seleccionar el distrito
        </p>
      </div>
    </div>
  );
};
