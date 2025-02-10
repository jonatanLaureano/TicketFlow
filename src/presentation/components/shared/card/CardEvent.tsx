import { Button } from '../../ui/button';
import { Card, CardContent, CardFooter, CardHeader } from '../../ui/card';
import { TypographyH3, TypographyP } from '../typography';

export const CardEvent = () => {
	return (
		<Card className='rounded-sm'>
			<CardHeader className='p-0'>
				<img
					className='rounded-sm'
					src='https://assets.lummi.ai/assets/QmYsYFMLTGyoGPRajQnoQZRngfHQbFQGstaQ4vfaMmfpJ6?auto=format&w=1500'
					alt='image'
				/>
			</CardHeader>
			<CardContent className='p-3 flex items-center justify-between'>
				<div className='space-y-1'>
					<TypographyH3>Evento freestyle</TypographyH3>
					<TypographyP>25 de junio</TypographyP>
				</div>

				<span className='bg-black rounded-md text-white p-2 font-medium'>$49.00</span>
			</CardContent>
			<CardFooter className='px-3 py-2'>
				<Button className='w-full'>Comprar</Button>
			</CardFooter>
		</Card>
	);
};
