import { category } from "@/config/const/navCategory";
import { Link } from "react-router-dom";

export const Category = () => {
  return (
    <div className="flex flex-col items-center lg:items-start">
      <div className="w-auto flex flex-col items-center sm:items-start flex-1">
        <h1 className="text-1xl font-bold tracking-tight lg:text-2xl mb-4">
          Categorias
        </h1>
        <ul className="flex flex-col items-center sm:items-start list-inside text-white gap-3 sm:gap-4">
          {category.map(({ name, path }) => (
            <li className="list-none sm:list-disc" key={name}>
              <Link to={path}>{name}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
