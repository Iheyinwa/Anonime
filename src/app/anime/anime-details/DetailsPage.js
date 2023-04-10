'use client';
import '../../globals.css';
import DetailsAnime from '@/components/DetailsAnime/DetailsAnimecomponents';
import { SmallPopularContainer } from '@/components/Popular Anime/PopularAnime.stylescomponents';
import PopularAnime from '@/components/Popular Anime/PopularAnimecomponents';
import StreamingAnime from '@/components/StreamingAnime/StreamingAnimecomponents';

export default function DetailsPage() {
	return (
		<section className="wrapper">
			<div className="container">
				<StreamingAnime />
				<DetailsAnime />
				{/* <SmallPopularContainer /> */}
			</div>
			<PopularAnime />
		</section>
	);
}
