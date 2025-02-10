import { TypographyH5 } from "../../shared/typography";
import { sponsors } from "@/config/const/sponsorList"; // Ajusta la ruta de importación

export const SectionSponsor = () => {
  return (
    <div className="relative overflow-hidden w-full ">
      <TypographyH5 className="md:m-10 m-4 ">Nuestros Patrocinadores 💸</TypographyH5>
      <div
        x-data="{}"
        x-init="$nextTick(() => {
          let ul = $refs.logos;
          ul.insertAdjacentHTML('afterend', ul.outerHTML);
          ul.nextSibling.setAttribute('aria-hidden', 'true');
        })"
        className="w-full inline-flex flex-nowrap overflow-hidden mt-20 mb-20 [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-200px),transparent_100%)]"
      >
        <ul
          x-ref="logos"
          className="flex items-center [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll"
        >
          {sponsors.map((sponsor) => (
            <li key={sponsor.name}>
              <img
                src={sponsor.logo}
                alt={sponsor.name}
                className="h-12 w-auto md:h-16 lg:h-32 object-contain"
              />
            </li>
          ))}
        </ul>
        {/* Duplicamos la lista para el efecto infinito */}
        <ul className="flex items-center [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll">
          {sponsors.map((sponsor) => (
            <li key={sponsor.name}>
              <img
                src={sponsor.logo}
                alt={sponsor.name}
                className="h-12 w-auto md:h-16 lg:h-32 object-contain"
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
