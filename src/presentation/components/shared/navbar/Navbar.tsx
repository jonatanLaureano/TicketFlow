import { useState, useEffect } from "react";
import { NavSearch } from "./NavSearch";
import { NavLinks } from "./NavLinks";
import { MenuBar } from "../menu-bar";
import useMediaQuery from "@/presentation/hooks/use-media-query";
import { Link, NavLink } from "react-router-dom";

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleLogoClick = () => {
    setOpenIndex(null); // Cerrar el submenú al hacer clic en el logo
  };

  const isDesktop = useMediaQuery("(min-width: 768px)");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`w-full h-20 p-4 fixed top-0 z-30 transition-colors duration-300 ${
        isScrolled ? "bg-black" : "bg-black bg-opacity-70"
      }`}
    >
      <nav className="flex items-center justify-between">
        {/* Contenedor del logo y búsqueda */}
        <div className="flex items-center gap-4">
          <NavLink to="/" onClick={handleLogoClick}>
            <img src="logo-ticketflow.png" alt="logo" className="w-12 h-12" />
          </NavLink>
          <NavSearch />
        </div>

        {/* Contenedor para centrar los enlaces */}
        <div className="flex-grow flex justify-center">
          {isDesktop ? (
            <NavLinks openIndex={openIndex} setOpenIndex={setOpenIndex} />
          ) : (
            <div className="flex justify-end w-full">
              <MenuBar />
            </div>
          )}
        </div>

        {/* Botón de iniciar sesión a la derecha solo en desktop */}
        {isDesktop && (
          <div className="flex items-center">
            <Link
              to="/"
              className="px-10 text-sm py-2 bg-purple-950 text-white rounded-md hover:bg-purple-900 transition-colors"
              onClick={handleLogoClick} // Cerrar el submenú al hacer clic en Iniciar sesión
            >
              Iniciar sesión
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
};
