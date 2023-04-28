import React, { useState } from 'react';
import NavBar from '../Navbar/NavBar.js';

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
					<HeroBtn>Crear Cuenta</HeroBtn>
				</HeroItems>
			</HeroContent>
		</HeroContainer>
	);
}

export default Hero;