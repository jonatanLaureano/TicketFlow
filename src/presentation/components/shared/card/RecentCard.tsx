import { Event } from '@/infrastructure/interfaces/apiEvent.response';
import { CiStar } from 'react-icons/ci';
import { SlLike } from 'react-icons/sl';
import { FaRegBookmark } from "react-icons/fa";
import { IoMdShare } from "react-icons/io";



export function RecentCard({
	eventName,
	price,
	url,
	newPrice,
	descriptionEvent,
	totalAttendees,
	isFree,
	isDiscount,
	recentThreeProfiles,
}: Event) {
	return (
		<div className='p-3 space-y-3 bg-white shadow border border-default-200 relative'>

			<h1 className='text-base md:text-xl xl:text-3xl font-medium'>{eventName}</h1>
			<img
				src={url}
				alt=''
				className='w-full h-[250px] object-cover object-center'
			/>
			<div className='absolute top-14 right-16 bg-white bg-opacity-70 rounded-[100px] p-1.5 flex items-center justify-center'>
				<button>
				<FaRegBookmark className='text-purple-900' size={25} />
				</button>
			</div>
			<div className='absolute top-14 right-5 bg-white bg-opacity-70 rounded-[100px] p-1.5 flex items-center justify-center'>
				<button>
				<IoMdShare className='text-purple-900' size={25} />
				</button>
			</div>
			<div className='space-y-2.5 '>
				<div className='flex items-center justify-between'>
					<div className='flex items-center gap-0.5'>
						<div className='relative w-[80px] h-[32px]  '>
							{recentThreeProfiles.map((photo, index) => (
								<div
									key={index}
									className='absolute rounded-full bg-red-400 size-8'
									style={{
										left: `${index * 20}px`,
										zIndex: `${10 - index}`,
									}}>
									<img
										src={photo}
										alt={`Foto ${index}`}
										className='rounded-full w-full h-full object-cover'
									/>
								</div>
							))}
						</div>
						<span className='block text-xs md:text-base'>{totalAttendees}+</span>
					</div>
					<div className='gap-3 flex flex-col md:flex-row md:items-center items-start'>
					<div className='flex items-center gap-1'>
						<CiStar size={20} />
						<span className='text-xs md:text-base font-medium'>Me interesa</span>
					</div>
					<div className='flex items-center gap-1'>
						<SlLike size={15} />
						<span className='text-xs md:text-base font-medium'>Asistiré</span>
					</div>

					</div>
				</div>
				
				<span className='text-xs md:text-base block '>{descriptionEvent}</span>

				<div className='flex items-center text-purple-800 text-2xl'>
					{isFree ? (
						<div className='grow '>
							<span className='font-bold text-base md:text-md'>Gratuito</span>
						</div>
					) : (
						<div className='grow flex items-center gap-3 '>
							<span
								className={`font-bold text-base md:text-md ${
									isDiscount ? 'line-through text-slate-400' : ''
								}`}>
								${price}
							</span>
							{isDiscount ? (
								<span className='font-bold text-base md:text-md '>${newPrice}</span>
							) : null}
						</div>
					)}
					<button className='bg-[#472280D9] text-white font-medium  px-2.5 md:px-12 py-2.5 text-xs md:text-base border border-[#472280D9] rounded-md hover:bg-purple-900'>
						{isFree ? 'Inscribirse' : 'Comprar'}
					</button>
				</div>
			</div>
		</div>
	);
}
