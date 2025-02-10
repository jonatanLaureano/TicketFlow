import { SectionSponsor } from '../../components/home/sections';
import {
	SectionBuyCategories,
	SectionInfo,
	SectionRecent,
	SectionBlog,
	SectionFeatured,
	SectionPopular,
	SectionCreate
} from '@/presentation/components/home/sections';

export const HomePage = () => {
	return (
		<>
			<SectionInfo />
			<SectionRecent />
			<SectionFeatured/>
			<SectionPopular/>
			<SectionBuyCategories />
			<SectionCreate/>
			<SectionSponsor/>
			<SectionBlog/>
		</>
	);
};
