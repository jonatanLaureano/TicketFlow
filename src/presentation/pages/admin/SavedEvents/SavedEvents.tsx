import { SectionMyEvents } from "@/presentation/components/home/sections/SectionMyEvents";
import { SelectSearch } from "@/presentation/components/shared/selects";
import { Button } from "@/presentation/components/ui/button";
import { NavigationMenu} from "../home/NavigationMenu";
export const SavedEvents = () => {
  return (
    <>
     <NavigationMenu />
      <div className="mt-20 mb-10 mx-10 flex items-center">
       
        <Button className="bg-[#624393] hover:bg-[#472280] text-base px-10 mt-[40px]">
          Crear evento
        </Button>
        <SelectSearch viewLocal={false} viewValue={true} />
      </div>
      <SectionMyEvents />
    </>
  );
};
