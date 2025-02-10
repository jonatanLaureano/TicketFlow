import { Button } from "@/components/ui/button";
import { NavigationMenu } from "./NavigationMenu";
import { Input } from "@/presentation/components/ui/input";
import { CiSearch } from "react-icons/ci";
import { SectionMyArtists } from "@/presentation/components/home/sections/SectionMyArtists";

export const Artists = () => {
  return (
    <>
      <NavigationMenu />
      <div className="mx-10 sm:justify-center sm:grid md:flex md:justify-between py-14">
        <Button variant="purple" className="text-base px-14 py-5 sm:mb-2">
          Agregar artista
        </Button>
        <div className="relative0 bg-white rounded-md w-[345px]">
          <Input
            placeholder="Escribir nombre del artista"
            className="py-5 pl-2 border-2 border-purple-400 hover:border-purple-700"
          />
          <div className="absolute right-0 top-1 p-2">
            <CiSearch className="text-xl" style={{ strokeWidth: 2 }} />
          </div>
        </div>
      </div>
      <SectionMyArtists />
    </>
  );
};
