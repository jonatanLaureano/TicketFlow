import { eventsF } from '@/config/const';
import { TypographyH5 } from '../../shared/typography';
import { FeaturedCard } from '../../shared/card/FeaturedCard';
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from '../../ui/carousel';



export const SectionFeatured = () => {
	return (
		<Carousel className='px-4 py-6 space-y-10 md:m-12 m-4 '>
			<TypographyH5>DESTACADOS ★</TypographyH5>
			<CarouselContent className='flex gap-12  max-w-[100%] mx-auto px-0 py-0'>
				{eventsF.map((event) => (
					<CarouselItem
					key={event.id}
					className='flex-none w-[97%] sm:w-[48%] lg:w-[23%]  p-0'>

						<FeaturedCard {...event}/>
					</CarouselItem>
						
				))}
			</CarouselContent>

			<CarouselPrevious
				className='hidden lg:flex absolute left-1 top-[35%] -translate-y-[50%] z-20 bg-purple-900 hover:bg-purple-800 
				text-white hover:text-white w-20 h-20 rounded-full 
				items-center justify-center text-xl'
			/>	

			<CarouselNext
				className='absolute right-2 sm:right-3 md:right-1 top-[35%] -translate-y-[50%] 
				bg-purple-900 hover:bg-purple-800 
				text-white w-20 h-20 md:w-20 md:h-20'
			/>

		</Carousel>
	);
};