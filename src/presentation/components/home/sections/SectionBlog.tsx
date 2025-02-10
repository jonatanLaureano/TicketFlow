import { blogs } from "../../shared/fakeapis/bd";
import { TypographyH2 } from "../../shared/typography";
import { Button } from "@/presentation/components/ui/button";

export const SectionBlog = () => {
  return (
    <section className="w-full mx-auto py-10 mb-8 bg-black">
      <TypographyH2 className="font-bungee text-white md:text-4xl m-10 text-center">Blog</TypographyH2>
      <div className="grid grid-cols-1 gap-1 md:grid-cols-2 lg:grid-cols-3 mx-28 mb-3 sm:m-3 lg:m-20 md:md-10">
        {blogs.map(({ url, id, image, title }) => (
          <a
            key={id}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="relative group"
          >
            <div className="overflow-hidden">
              <img
                src={image}
                alt={`Imagen de ${title}`}
                className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                loading="lazy"
              />
            </div>
            <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <h3 className="text-white text-center text-3xl font-semibold px-4">
                {title}
              </h3>
            </div>
          </a>
        ))}
      </div>
      <div className="flex justify-center mt-6">
        <Button className="font-bold px-10 py-6 md:text-xl bg-black border-2  border-purple-500 transition-all duration-200 text-purple-700 hover:bg-purple-500 hover:text-white">
          Ir al blog
        </Button>
      </div>
    </section>
  );
};
