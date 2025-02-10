import * as React from "react";
import { format } from "date-fns";
import { cn } from "@/presentation/lib/utils";
import { Button } from "@/presentation/components/ui/button";
import { Calendar } from "@/presentation/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/presentation/components/ui/popover";

export const SelectDate = () => {
  const [date, setDate] = React.useState<Date>();

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          className={cn(
            "w-96 justify-between text-left font-normal border-purple-200 hover:border-purple-300 border-2 ",
            !date && "text-muted-foreground"
          )}
        >
          {date ? format(date, "dd/MM/yy") : <span>dd/mm/aa</span>}
          <img src="/iconCalendar2.svg" className="size-4" alt="calendar icon" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="p-0">
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          initialFocus
        />
      </PopoverContent>
    </Popover>
  );
};
