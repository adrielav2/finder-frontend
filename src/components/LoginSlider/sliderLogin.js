import React, { useState } from 'react';

import {
	SliderContainer,
	SliderA,
	SliderBody,
	SliderContent,
	SliderForm,
	SliderH1,
    SliderInput,
    SliderP,
    SliderSpan,
    SliderButton,
} from './loginSliderElements.js';


function SliderLogin() {

    return (
        <SliderBody>
 
            <SliderContainer >
                
                    <SliderH1>Registrese aquí</SliderH1>

                    <SliderInput type = "text" placeholder='Nombre' />
                    <SliderInput type = "email" placeholder='Email' />
                    <SliderInput type = "password" placeholder='Contraseña' />
                    <SliderButton> Registrarse  </SliderButton> 

                
            </SliderContainer>



















        </SliderBody>
        )

}

export default SliderLogin;