import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import "@fontsource/mr-dafoe/400.css";
import "@fontsource/tenor-sans/400.css";
import "@fontsource/itim/400.css";
import "@fontsource/ibm-plex-sans-thai-looped/400.css";
import "@fontsource/sriracha/400.css";
import { forwardRef } from 'react';

function MyApp({ Component, pageProps, ref }) {
  return <Component {...pageProps} forwardedRef={ref}/>
}

export default MyApp
