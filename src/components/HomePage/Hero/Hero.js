import React, { useState } from 'react';
import NavBar from '../Navbar/NavBar.js';
import Link from 'next/link';

import {
	HeroContainer,
	HeroContent,
	HeroItems,
	HeroH1,
	HeroP,
	HeroBtn,
} from './HeroElements.js';

function Hero() {
    return (
		<HeroContainer>
			<NavBar/>
			<HeroContent>
				<HeroItems>
					<HeroH1>Encuentra a tu gente</HeroH1>
					<HeroP>Empieza ahora</HeroP>
					<Link href="/register">
					<HeroBtn>Crear Cuenta</HeroBtn>
					</Link>
				</HeroItems>
			</HeroContent>
		</HeroContainer>
	);
}

export default Hero;