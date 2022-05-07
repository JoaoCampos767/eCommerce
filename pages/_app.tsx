import "../styles/globals.scss";
import type { AppProps } from "next/app";
import "@primer/css/utilities/index.scss";

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
