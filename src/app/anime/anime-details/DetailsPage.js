'use client';
import '../../globals.css';
import DetailsAnime from '@/components/DetailsAnime/DetailsAnimecomponents';
import PopularAnime from '@/components/Popular Anime/PopularAnimecomponents';
import StreamingAnime from '@/components/StreamingAnime/StreamingAnimecomponents';

export default function DetailsPage() {
	return (
		<section className="wrapper">
			<div className="container">
				<StreamingAnime />
				<DetailsAnime />
				{/* <SmallPopularAnime /> */}
			</div>
			<PopularAnime />
		</section>
	);
}
