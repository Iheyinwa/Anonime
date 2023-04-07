'use client';

import {
	HeroH3,
	DarkGradient,
	HeroParagraph,
	HeroText,
	Paragraph,
	SectionTitle,
	StyledHero,
	Search
} from './Explore.styles';
import Image from 'next/image';
import carousel from '/public/carousel.jpeg';
export default function Explore() {
	return (
		<section>
			<SectionTitle>Explore</SectionTitle>
			<Paragraph>What are you gonna watch today?</Paragraph>
			<Search placeholder="Search anime or movie" />
			<StyledHero>
				<Image src={carousel} alt="anime" fill={true} style={{ borderRadius: '12px' }} />
				<DarkGradient />
				<HeroText>
					<HeroH3>Weather With You</HeroH3>
					<HeroParagraph>
						{' '}
						Corrupt politicians, frenzied nationalists, and other warmongering forces constantly jeopardize
						the thin veneer of peace between neighboring countries Ostania and Westalis.{' '}
					</HeroParagraph>
				</HeroText>
			</StyledHero>
		</section>
	);
}
