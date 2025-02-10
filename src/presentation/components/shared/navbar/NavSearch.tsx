import { CiSearch } from 'react-icons/ci';
import { Button } from '../../ui/button';
import { Input } from '../../ui/input';

export const NavSearch = () => {
	return (
		<form className='relative bg-white rounded-md w-60'>
			<Input placeholder='Buscar evento'
			 />

			<Button
				variant='ghost'
				size='icon'
				className='absolute right-0 top-0 p-2'>
				<CiSearch className='text-xl' style={{ strokeWidth: 2 }}/>
			</Button>
		</form>
	);
};
