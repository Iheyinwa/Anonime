import styled from 'styled-components';
import { HiMenuAlt4 } from 'react-icons/hi';

export const StyledHeader = styled.header`
	display: flex;
	justify-content: space-between;
	align-items: center;
	/* margin: 0px 83px; */
`;
export const StyledNav = styled.nav`
	display: flex;
	justify-content: space-around;
	align-items: center;
`;
export const StyledH3 = styled.h3`
	font-weight: bold;
	font-size: 36px;
	line-height: 32px;
`;
export const StyledUl = styled.ul`
	list-style: none;
	display: flex;

	@media (max-width: 870px) {
		display: none;
	}
`;
export const StyledLi = styled.li`padding: 10px;`;

export const StyledInput = styled.input`
	background-color: #374151;
	border: 1px solid #374151;
	border-radius: 40px;
	width: 374.58px;
	padding: 10px;
	text-align: left;
	color: #868686;
	font-weight: 400;

	@media (max-width: 870px) {
		display: none;
	}
`;

export const Menu = styled(HiMenuAlt4)`
width: 70px;
height: 50px;
color: white;
font-size: 45px;
cursor: pointer;

@media (min-width: 870px){
	display: none;
}
`;
