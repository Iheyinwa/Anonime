import { SectionTitle } from '../Explore/Explore.styles';
import { PopularCard, PopularContainer, PopularMovies } from './PopularAnime.styles';
import Image from 'next/image';
import OnePiece from '/public/one-piece.jpeg';
import Boruto from '/public/boruto.jpeg';
import Spy from '/public/spycard.jpeg';
import AttackOnTitan from '/public/attackontitan.png';
import CaptainTsu from '/public/captsu.jpeg';
import Aoashi from '/public/aoashi.jpeg';
import { MovieCard1 } from '../Release/Release.styles';

const titles = [
	{
		id: 1,
		src: OnePiece,
		name: 'One Piece',
		episode: 'Episode 1018'
	},
	{
		id: 2,
		src: Boruto,
		name: 'Boruto Naruto Next Generations',
		episode: 'Episode 250'
	},
	{
		id: 3,
		src: Spy,
		name: 'Spy X Family',
		episode: 'Episode 7'
	},
	{
		id: 4,
		src: AttackOnTitan,
		name: 'Shingeki no kyoujin',
		episode: 'Episode 28'
	},
	{
		id: 5,
		src: CaptainTsu,
		name: 'Captain Tsubasa',
		episode: 'Episode 28'
	},
	{
		id: 6,
		src: Aoashi,
		name: 'Aoashi',
		episode: 'Episode 28'
	}
];

export default function PopularAnime() {
	return (
		<PopularContainer>
			<SectionTitle>Popular Anime</SectionTitle>
			<PopularMovies>
				{titles.map((title) => (
					<PopularCard key={title.id}>
						<Image src={title.src} alt="One-piece" fill style={{ borderRadius: '12px' }} />
					</PopularCard>
				))}
			</PopularMovies>
		</PopularContainer>
	);
}
