import { TypographyH1 } from "@/presentation/components/shared/typography"
import { Card } from "@/presentation/components/ui/card"
import { Carousel } from "@/presentation/components/ui/carousel"


export const CardAbout = () =>{
    return(
        <Carousel className="bg-gray-100 p-14">
            <TypographyH1 className="text-center text-2xl mb-8">Lorem Imput</TypographyH1>
        <Carousel className="flex justify-center rounded-none">
            <Carousel className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6 bg-gray-100">
                <Card />
                <Card />
                <Card />
                <Card />
            </Carousel>
        </Carousel>

        </Carousel>
    )
}

