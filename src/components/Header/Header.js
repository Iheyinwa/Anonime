import { StyledInput, StyledH3, StyledUl, StyledHeader, StyledLi, StyledNav } from './Header.styles';
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
			<StyledInput placeholder="Search anime or movie" />
		</StyledHeader>
	);
}
