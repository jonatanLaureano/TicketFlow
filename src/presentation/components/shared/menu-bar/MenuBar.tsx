import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/presentation/components/ui/drawer";
import { RxCross1 } from "react-icons/rx";
import { NavLink } from "react-router-dom";
import { MenuIcon } from "lucide-react";
import { navLinks } from "@/config/const";
import { useState } from "react";

export const MenuBar = () => {
  const [openSubLinkIndex, setOpenSubLinkIndex] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [closing, setClosing] = useState(false);

  const handleSubLinkToggle = (index: any) => {
    setOpenSubLinkIndex(openSubLinkIndex === index ? null : index);
  };

  const handleLinkClick = () => {
    setClosing(true);
    setTimeout(() => {
      setIsOpen(false);
      setClosing(false);
    }, 300);
  };

  return (
    <div>
      <Drawer
        direction="right"
        open={isOpen}
        onOpenChange={(open) => {
          if (!open) setClosing(false);
          setIsOpen(open);
        }}
      >
        <DrawerTrigger>
          <p className="text-white" onClick={() => setIsOpen(true)}>
            <MenuIcon />
          </p>
        </DrawerTrigger>
        <DrawerContent
          className={`transition-transform duration-300 ${
            closing ? "transform -translate-y-full" : "transform translate-y-0"
          }`}
        >
          <DrawerHeader className="flex justify-between items-center text-white">
            <DrawerTitle>Menú</DrawerTitle>
            <DrawerTrigger>
              <button className="text-white" onClick={() => setIsOpen(false)}>
                <RxCross1 />
              </button>
            </DrawerTrigger>
          </DrawerHeader>
          <ul className="flex flex-col items-center gap-4 p-4">
            {navLinks.map(({ name, path, subLinks }, index) => (
              <li key={name} className="w-full">
                {path ? (
                  <NavLink
                    to={path}
                    className={({ isActive }) =>
                      `block w-full text-center px-4 py-2 text-sm transition-colors duration-300 ${
                        isActive
                          ? "bg-purple-800 text-white"
                          : "text-white hover:bg-purple-300"
                      }`
                    }
                    onClick={handleLinkClick}
                  >
                    {name}
                  </NavLink>
                ) : (
                  <div
                    onClick={() => handleSubLinkToggle(index)}
                    className={`block w-full text-center px-4 py-2 text-sm transition-colors duration-300 cursor-pointer ${
                      openSubLinkIndex === index
                        ? "bg-purple-800 text-white"
                        : "text-white hover:bg-purple-300"
                    }`}
                  >
                    {name}
                  </div>
                )}
                {subLinks &&
                  subLinks.length > 0 &&
                  openSubLinkIndex === index && (
                    <ul
                      className="flex flex-col items-start pl-4"
                      style={{
                        maxHeight: openSubLinkIndex === index ? "100px" : "0",
                        opacity: openSubLinkIndex === index ? 1 : 0,
                        overflow: "hidden",
                        transition: "max-height 0.3s ease, opacity 0.3s ease",
                        transform:
                          openSubLinkIndex === index
                            ? "translateY(0)"
                            : "translateY(-10px)",
                      }}
                    >
                      {subLinks.map(({ name: subName, path: subPath }) => (
                        <li key={subName} className="w-full">
                          <NavLink
                            to={subPath || "#"}
                            className={({ isActive }) =>
                              `block w-full text-left px-4 py-2 text-sm transition-colors duration-300 ${
                                isActive
                                  ? "text-white"
                                  : "text-white hover:bg-purple-300"
                              }`
                            }
                            onClick={() => {
                              handleLinkClick();
                              setOpenSubLinkIndex(null);
                            }}
                          >
                            {subName}
                          </NavLink>
                        </li>
                      ))}
                    </ul>
                  )}
              </li>
            ))}
            <li className="w-full">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `block w-full text-center px-4 py-2 text-sm transition-colors duration-300 ${
                    isActive ? "text-white" : "hover:bg-purple-300 text-white"
                  }`
                }
                onClick={handleLinkClick}
              >
                Iniciar sesión
              </NavLink>
            </li>
          </ul>
        </DrawerContent>
      </Drawer>
    </div>
  );
};
