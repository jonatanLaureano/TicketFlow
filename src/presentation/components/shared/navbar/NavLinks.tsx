import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/presentation/components/ui/dropdown-menu";
import { navLinks } from "@/config/const";
import { NavLink } from "react-router-dom";
import { TiArrowSortedDown } from "react-icons/ti";

type Props = {
  openIndex: number | null;
  setOpenIndex: (index: number | null) => void;
};
export const NavLinks = ({ openIndex, setOpenIndex }: Props) => {
  // Maneja la apertura/cierre del submenú
  const handleToggle = (index: any) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // Cierra el menú cuando se selecciona una opción
  const handleSubLinkClick = () => {
    setOpenIndex(null); // Cierra el menú principal
  };

  return (
    <div className="relative flex space-x-4">
      {navLinks.map(({ name, path, subLinks }, index) => (
        <div key={name} className="relative">
          <DropdownMenu>
            <DropdownMenuTrigger>
              {path ? (
                // Si el menú principal tiene un path, que sea clicable
                <NavLink
                  to={path}
                  onClick={handleSubLinkClick} // Cierra el menú al hacer clic en un enlace principal
                  className={({ isActive }) =>
                    `text-white transition-colors duration-300 ${
                      isActive ? "text-purple-500" : "hover:text-[#C79FDB]"
                    }`
                  }
                >
                  {name}
                </NavLink>
              ) : (
                // Si no tiene path, simplemente abre el submenú
                <div
                  onClick={() => handleToggle(index)}
                  className={`flex items-center gap-2 text-white transition-colors duration-300 cursor-pointer ${
                    openIndex === index
                      ? "text-purple-500"
                      : "hover:text-[#C79FDB]"
                  }`}
                >
                  {name}
                  {subLinks && subLinks.length > 0 && (
                    <TiArrowSortedDown className="text-white" />
                  )}
                </div>
              )}
            </DropdownMenuTrigger>

            {openIndex === index && subLinks && subLinks.length > 0 && (
              <DropdownMenuContent className="absolute left-1/2 transform -translate-x-1/2 top-full mt-2 bg-white shadow-lg rounded-md p-4 w-[80vw] grid grid-cols-4 gap-4 text-black">
                {/* Submenús organizados en columnas */}
                {subLinks.map(
                  ({
                    name: subName,
                    path: subPath,
                    subLinks: innerSubLinks,
                  }) => (
                    <div key={subName} className="space-y-2">
                      {subPath ? (
                        // Si el subenlace tiene un path, lo hacemos clicable
                        <h3 className="font-semibold">
                          <NavLink
                            to={subPath}
                            onClick={handleSubLinkClick} // Cierra el menú al hacer clic en un subenlace
                            className="text-black hover:bg-purple-300 p-2 block rounded-md transition-colors"
                          >
                            {subName}
                          </NavLink>
                        </h3>
                      ) : (
                        // Si no tiene path, solo despliega el submenú
                        <h3
                          className="font-semibold cursor-pointer text-black hover:bg-purple-300 p-2 rounded-md"
                          onClick={() => handleToggle(index)} // Despliega/cierra el submenú
                        >
                          {subName}
                        </h3>
                      )}

                      {/* Sub-subenlaces */}
                      {innerSubLinks &&
                        innerSubLinks.length > 0 &&
                        innerSubLinks.map(
                          ({ name: innerName, path: innerPath }) => (
                            <DropdownMenuItem key={innerName}>
                              <NavLink
                                to={innerPath || "#"}
                                onClick={handleSubLinkClick} // Cierra el menú al hacer clic en un sub-subenlace
                                className="block p-2 text-black hover:bg-purple-300 transition-colors"
                              >
                                {innerName}
                              </NavLink>
                            </DropdownMenuItem>
                          )
                        )}
                    </div>
                  )
                )}
              </DropdownMenuContent>
            )}
          </DropdownMenu>
        </div>
      ))}
    </div>
  );
};
