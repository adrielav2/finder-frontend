import React from 'react';
import { Nav, NavLink, LoginBtn, Icon } from './NavBarElements.js';
import Link from 'next/link';


function NavBar() {
	return (
		<>
			<Nav>
				<Icon></Icon> 
				<NavLink href='/'>Finder</NavLink>
				<Link href="/logIn">
					<LoginBtn>Iniciar Sesión</LoginBtn>
				</Link>
			</Nav>
		</>
	);
}

export default NavBar;