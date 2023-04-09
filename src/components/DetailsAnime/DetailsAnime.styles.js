import styled from 'styled-components';

export const DetailContainer = styled.div`
	display: flex;
	align-content: start;
	@media (max-width: 870px) {
		justify-content: space-around;
	}
`;
export const MovieDetails = styled.div`
	margin-left: 20px;
	width: 100%;
`;

export const SynopsisContainer = styled.div`margin-top: 40px;`;

export const SynopsisHeader = styled.p`
	font-size: 12px;
	margin-top: 0;
`;
export const SynopsisContent = styled.p`
	color: #868686;
	font-size: 12px;
	text-align: justify;
`;
