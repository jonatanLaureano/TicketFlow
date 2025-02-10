import React, { useState } from 'react';
import { Button } from '@/presentation/components/ui/button';
import { Calendar } from '@/presentation/components/ui/calendar';
import { CalendarIcon } from 'lucide-react';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/presentation/components/ui/popover';
import { format } from 'date-fns';

interface CustomDatePickerProps {
  value: Date | undefined;
  onChange: (date: Date | undefined) => void;
}

export const CustomDatePicker: React.FC<CustomDatePickerProps> = ({ value, onChange }) => {
  const [isPopoverOpen, setPopoverOpen] = useState(false);

  return (
    <Popover open={isPopoverOpen} onOpenChange={setPopoverOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          onClick={() => setPopoverOpen(!isPopoverOpen)}
          className="w-full h-[43px] border-2 border-[#6F2DA8] rounded flex justify-between items-center"
        >
          <span className="text-left">
            {value ? format(value, 'dd / MM / yyyy') : 'SELECCIONA UNA FECHA'}
          </span>
          <CalendarIcon className="h-4 w-4 text-[#6F2DA8]" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-72 p-0" align="start">
        <Calendar
          mode="single"
          selected={value}
          onSelect={(date) => {
            onChange(date || undefined);
            setPopoverOpen(false); // Cierra el popover al seleccionar una fecha
          }}
          disabled={(date) => date > new Date() || date < new Date("1900-01-01")}
          initialFocus
        />
        <div className="flex justify-end p-2">
          <button
            type="button"
            className="text-[#6F2DA8] py-2 px-4 rounded hover:bg-gray-200 hover:text-red-600"
            onClick={() => setPopoverOpen(false)} // Cierra el popover al hacer clic en "Cancelar"
          >
            Cancelar
          </button>
          <button
            type="button"
            className="text-[#6F2DA8] py-2 px-4 rounded hover:bg-gray-200 hover:text-blue-600"
            onClick={() => setPopoverOpen(false)} // Cierra el popover al hacer clic en "Listo"
          >
            Listo
          </button>
        </div>
      </PopoverContent>
    </Popover>
  );
};
