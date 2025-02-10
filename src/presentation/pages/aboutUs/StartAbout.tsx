import { Carousel } from "@/presentation/components/ui/carousel"
import { TypographyP, TypographyH1, TypographyH3 } from "@/presentation/components/shared/typography"

export const StartAbout = () => {
    return(
        <Carousel className="bg-gray-700 text-white py-8 px-6 mt-40 mb-20">
      <TypographyH1 className="text-5xl font-semibold mb-8 ml-10 mt-10">Sobre nosotros</TypographyH1>
      <TypographyP className="text-xl text-gray-300 mb-6 ml-10">
        Lorem Ipsum es simplemente el texto de relleno de las imprentas y <br/>
        archivos de texto. Lorem Ipsum es simplemente el texto de relleno de las <br/>
         imprentas y archivos de texto.
      </TypographyP>

      <Carousel>
        <TypographyH3 className="text-lg mb-4 ml-16">Nuestras redes sociales</TypographyH3>
        <Carousel className="flex space-x-4 ml-12 mb-16">
          <Carousel className="w-14 h-14 bg-gray-400 rounded-full"></Carousel>
          <Carousel className="w-14 h-14 bg-gray-400 rounded-full"></Carousel>
          <Carousel className="w-14 h-14 bg-gray-400 rounded-full"></Carousel>
        </Carousel>
      </Carousel>

    </Carousel>
    )

}