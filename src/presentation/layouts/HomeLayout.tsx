import { Outlet } from 'react-router-dom';
import { Navbar } from '../components/shared/navbar';
import { FooterPage } from '../components/footer';

export const HomeLayout = () => {
	return (
		<>
			<Navbar />
			<main>
				<Outlet />
			</main>
			<FooterPage />
		</>
	);
};
