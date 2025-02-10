import { about } from "@/config/const/navAbout";
import { Link } from "react-router-dom";

export const AboutUs = () => {
  return (
    <div className="flex flex-col items-center lg:items-start mb-6">
      <div className="w-auto flex flex-col items-center sm:items-start flex-1">
        <h1 className="text-1xl font-bold tracking-tight lg:text-2xl mb-4">
          Conócenos
        </h1>
        <ul className="flex flex-col items-center sm:items-start list-inside text-white gap-3 sm:gap-4">
          {about.map(({ name, path }) => (
            <li className="list-none sm:list-disc" key={name}>
              <Link to={path}>{name}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
