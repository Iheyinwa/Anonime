import styled from 'styled-components';
import { StyledH3 } from '../Header/Header.styles';

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
	margin: 0 15px;

	@media (max-width: 500px) {
		font-size: 20px;
	}

	@media (max-width: 870px) {
		width: fit-content;
	}
`;
export const HeroParagraph = styled.p`
	font-size: 16px;
	line-height: 27px;
`;

export const SectionTitle = styled.h3`
	font-size: 30px;
	@media (max-width: 870px) {
		font-size: 25px;
		width: 100%;
	}
`;

export const DarkGradient = styled(StyledHero)`
	position: inherit;
	border-radius: 12px;
	background: linear-gradient(269.96deg, rgba(29, 29, 29, 0) 0.04%, rgba(29, 29, 29, 0.8) 99.5%);
`;
export const Search = styled.input`
	background-color: #374151;
	border: 1px solid #374151;
	border-radius: 40px;
	width: 96%;
	padding: 10px;
	text-align: left;
	color: #868686;
	font-weight: 400;
	margin-bottom: 10px;

	@media (min-width: 870px) {
		display: none;
	}
`;

export const HeroH3 = styled(StyledH3)`
@media (max-width: 500px){
	font-size: 20px;
}
`;
