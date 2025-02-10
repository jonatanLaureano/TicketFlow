import { EventFeat } from '@/infrastructure/interfaces/apiEvent.Featured'; 
import { FaRegBookmark } from "react-icons/fa";
import { IoMdShare } from "react-icons/io";
import { FaRegHeart } from "react-icons/fa";



export function FeaturedCard({
	
	price,
	url,
	newPrice,
	descriptionEvent,
    descriptionDate,
	isFree,
	isDiscount,
}: EventFeat) {
	return (
		<div className=' space-y-3 bg-white border-default-200 relative'>
			
			<img
				src={url}
				alt=''
				className='w-[93%] h-[500px] object-cover object-center mx-auto rounded-sm'
			/>
			<div className='absolute top-0 right-7 bg-white bg-opacity-70 rounded-[100px] p-1.5 flex items-center justify-center'>
				<button >
				<FaRegHeart className='text-purple-900' size={25} />
				</button>
			</div>
			<div className='absolute top-12 right-7 bg-white bg-opacity-70 rounded-[100px] p-1.5 flex items-center justify-center'>
				<button >
				<FaRegBookmark className='text-purple-900' size={25} />
				</button>
			</div>
			<div className='absolute top-24 right-7 bg-white bg-opacity-70 rounded-[100px] p-1.5 flex items-center justify-center'>
				<button>
				<IoMdShare className='text-purple-900' size={25} />
				</button>
			</div>
            <div className='flex justify-center'>
                <button className='bg-white text-purple-900 font-bold w-96 py-4 text-3xl border-4 border-purple-900 rounded-sm hover:bg-purple-900 hover:text-white'>
                    {isFree ? 'Inscribirse' : 'Comprar'}
                </button>
            </div>
            

			<div className='space-y-2.5'>
				<span className='text-3xl block ml-5'>{descriptionEvent}</span>
                
				<div className='flex items-center justify-start space-x-16 text-purple-800 text-2xl '>
                    <span className='text-base block ml-5 text-black'>{descriptionDate}</span>
                        
                        <div className=' flex  items-center gap-4 -ml-5'>
                            <span
                                className={`font-bold text-md  ${isDiscount ? 'font-bold text-md ' : ''}`}>
                                ${newPrice}
                            </span>
                            {isDiscount ? (
                                <span className='line-through text-slate-400 '>${price}</span>
                            ):null}
                        </div>
                    
            </div>


			</div>
		</div>
	);
}
