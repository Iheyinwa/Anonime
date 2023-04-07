import { StyledInput, StyledH3, StyledUl, StyledHeader, StyledLi, StyledNav, Menu } from './Header.styles';

export default function Header() {
	return (
		<StyledHeader>
			<StyledNav>
				<StyledH3>Anonime</StyledH3>
				<StyledUl>
					<StyledLi>Home</StyledLi>
					<StyledLi>List anime</StyledLi>
				</StyledUl>
			</StyledNav>
			<Menu />
			<StyledInput placeholder="Search anime or movie" />
		</StyledHeader>
	);
}
