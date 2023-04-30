import { GlobalStyle } from '../styles/globalStyles';
import Footer from '../components/HomePage/Footer/Footer';
import SliderLogin from '../components/LoginSlider/sliderLogin'
import Script from 'next/script';
import React from 'react';

export default function Login() {
  return (
    <React.StrictMode>
    <div>
  
    <GlobalStyle />
    <SliderLogin/>
    <Footer/>
    <Script src="../components/LoginSlider/sliderLogin" strategy="afterInteractive" />
    </div>
  
  </React.StrictMode>
    )
} 