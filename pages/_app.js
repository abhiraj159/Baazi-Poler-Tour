import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "../styles/globals.css";
import { useEffect } from "react";
import { ParallaxProvider } from 'react-scroll-parallax';


function MyApp({ Component, pageProps }) {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  return (
    <ParallaxProvider scrollAxis='verticle'>
      <Component {...pageProps} />
    </ParallaxProvider>
  );
}

export default MyApp;
