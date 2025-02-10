import { AboutUs } from "./AboutUs";
import { Category } from "./Category";
import { Contact } from "./Contact";
import { Social } from "./Social";

export const FooterPage = () => {
  return (
    <footer className="bg-slate-950 text-white grid grid-cols-1 gap-8 p-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 md:gap-4 md:p-10 py-8">
      <div className="flex flex-col items-center md:items-start mb-6 md:mb-0">
        <Social />
      </div>
      <div className="flex flex-col items-center md:items-start mb-6 md:mb-0">
        <AboutUs />
      </div>
      <div className="flex flex-col items-center md:items-start mb-6 md:mb-0">
        <Category />
      </div>
      <div className="flex flex-col items-center md:items-start mb-6 md:mb-0">
        <Contact />
      </div>
    </footer>
  );
};

