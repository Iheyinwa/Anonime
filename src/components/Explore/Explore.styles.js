import styled from 'styled-components';

export const StyledHero = styled.div`
	width: 100%;
	height: 400px;
	position: relative;
`;
export const Paragraph = styled.p`color: #868686;`;

export const HeroText = styled.div`
	position: absolute;
	top: 40%;
	left: 16px;
	width: 50%;
	height: 40%;
	margin: 0 15px;
`;
export const HeroParagraph = styled.p`
	font-size: 16px;
	line-height: 27px;
`;

export const SectionTitle = styled.h3`font-size: 32px;`;

export const DarkGradient = styled(StyledHero)`
	background: linear-gradient(269.96deg, rgba(29, 29, 29, 0) 0.04%, rgba(29, 29, 29, 0.8) 99.5%);
`;
