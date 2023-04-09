import { PopularCard } from '../Popular Anime/PopularAnime.styles';
import {
	DetailContainer,
	MovieDetails,
	SynopsisContainer,
	SynopsisContent,
	SynopsisHeader
} from './DetailsAnime.styles';
import Image from 'next/image';
import OnePiece from '/public/one-piece.jpeg';
import { MovieCard1 } from '../Release/Release.styles';
const title = {
	id: 1,
	src: OnePiece,
	name: 'One Piece',
	episode: 'Episode 1018'
};

export default function DetailsAnime() {
	return (
		<div>
			<DetailContainer>
				<MovieCard1 key={title.id}>
					<Image src={title.src} alt="One-piece" fill style={{ borderRadius: '12px' }} />
				</MovieCard1>
				<MovieDetails>
					<div>
						<SynopsisHeader>Type:</SynopsisHeader>
						<SynopsisContent>Tv</SynopsisContent>
					</div>
					<div>
						<SynopsisHeader>Status:</SynopsisHeader>
						<SynopsisContent>Ongoing</SynopsisContent>
					</div>
					<div>
						<SynopsisHeader>Studios:</SynopsisHeader>
						<SynopsisContent>Animation</SynopsisContent>
					</div>
					<div>
						<SynopsisHeader>Duration:</SynopsisHeader>
						<SynopsisContent>24 Min</SynopsisContent>
					</div>
					<div>
						<SynopsisHeader>Genres:</SynopsisHeader>
						<SynopsisContent>Action, Adventure, Fantasy</SynopsisContent>
					</div>
				</MovieDetails>
			</DetailContainer>
			<SynopsisContainer>
				<SynopsisHeader>Synopsis:</SynopsisHeader>
				<SynopsisContent>
					Gol D. Roger was known as the &quot;Pirate King,&quot; the strongest and most infamous being to have
					sailed the Grand Line. The capture and execution of Roger by the World Government brought a change
					throughout the world. His last words before his death revealed the existence of the greatest
					treasure in the world, One Piece. It was this revelation that brought about the Grand Age of
					Pirates, men who dreamed of finding One Piece—which promises an unlimited amount of riches and
					fame—and quite possibly the pinnacle of glory and the title of the Pirate King.
				</SynopsisContent>
			</SynopsisContainer>
		</div>
	);
}
