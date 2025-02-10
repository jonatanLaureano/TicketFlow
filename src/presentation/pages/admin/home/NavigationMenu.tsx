import { preferences } from "@/config/const";
import { FaChevronDown } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";

export const NavigationMenu = () => {
  const location = useLocation();

  return (
  <ul className="flex items-center gap-0 border-b-2 border-gray-500 pb-2 ml-10 mr-10 mt-32 md:overflow-visible overflow-x-auto whitespace-nowrap">
      {preferences.map(({ name, path }, index) => (
        <li key={name} className="relative group">
          <Link
            to={path}
            className={`text-gray-500 font-small transition-all duration-300 p-12
            ${location.pathname === path ? 'text-[#472280]' : ''}`}
          >
            {name}
            {index < 2 && <FaChevronDown className="inline ml-2 text-gray-500" />}
          </Link>
          <span
            className={`absolute left-0 bottom-[-8px] w-full h-[2px] bg-[#472280] transition-all duration-300
            ${location.pathname === path ? 'block' : 'hidden group-hover:block'}`}
          ></span>
        </li>
      ))}
    </ul>
  );
};
