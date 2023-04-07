import { useState } from 'react';
import {
	StyledInput,
	StyledH3,
	StyledUl,
	StyledHeader,
	StyledLi,
	StyledNav,
	Menu,
	MobileUl,
	Close
} from './Header.styles';

export default function Header() {
	const [ state, setState ] = useState(false);
	const openMenu = () => {
		setState(!state);
	};
	return (
		<div>
			<StyledHeader>
				<StyledNav>
					<StyledH3>Anonime</StyledH3>
					<StyledUl>
						<StyledLi>Home</StyledLi>
						<StyledLi>List anime</StyledLi>
					</StyledUl>
				</StyledNav>
				{state ? <Close onClick={openMenu} /> : <Menu onClick={openMenu} />}
				<StyledInput placeholder="Search anime or movie" />
			</StyledHeader>
			{state && (
				<MobileUl>
					<li>Home</li>
					<li>List anime</li>
				</MobileUl>
			)}
		</div>
	);
}
