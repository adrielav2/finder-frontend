import Hero from '../components/HomePage/Hero/Hero';
import Footer from '../components/HomePage/Footer/Footer';
import { GlobalStyle } from '../styles/globalStyles';


export default function Home() {
  return (
    <div>
      <GlobalStyle />
      <Hero />
      <Footer />
    </div>
      
  )
}
