import { GlobalStyle } from '../styles/globalStyles';
import { Fragment } from 'react';

export default function App({ Component, pageProps }) {
  return(
  <Fragment>
    <GlobalStyle />
    <Component {...pageProps} />
  </Fragment>
  )
}
