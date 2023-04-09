import Image from 'next/image';
import { SectionTitle } from '../Explore/Explore.styles';
import { DarkText, MovieCard1, MovieContainer, MovieText } from './Release.styles';
import OnePiece from '/public/one-piece.jpeg';
import Boruto from '/public/boruto.jpeg';
import Spy from '/public/spycard.jpeg';
import AttackOnTitan from '/public/attackontitan.png';
import CaptainTsu from '/public/captsu.jpeg';
import Aoashi from '/public/aoashi.jpeg';

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

export default function Release() {
	return (
		<section>
			<SectionTitle>New Release</SectionTitle>
			<MovieContainer>
				{titles.map((title) => (
					<MovieCard1 key={title.id}>
						<Image
							src={title.src}
							alt="One-piece"
							fill
							sizes="(min-width: 600px) 100vw,
              (max-width: 870px) 50vw,
              33vw"
							style={{ borderRadius: '12px' }}
						/>
						<DarkText />
						<MovieText>
							{title.episode} <p>{title.name}</p>
						</MovieText>
					</MovieCard1>
				))}
			</MovieContainer>
		</section>
	);
}
