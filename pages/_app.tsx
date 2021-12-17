import "../styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Oussama Baaziz | Software Developer</title>

        <meta
          property="og:title"
          content="Oussama Baaziz | Software Developer"
        />
        <meta property="og:type" content="Portfolio" />
        <meta
          property="og:description"
          content="Software Developer with nearly four years of experience Creating, Maintaining, and
          Implementing web applications to assist businesses in digital transformation."
        />
        <meta
          property="og:image"
          content="https://bzouss.com/nextimg/%2Fimages%2Favatar.jpg/1080/100?url=%2Fimages%2Favatar.jpg&w=1080&q=100"
        />

        <meta property="og:url" content="https://bzouss.com" key="url" />
        <meta property="twitter:card" content="summary_large_image" />
      </Head>
      <Component {...pageProps} />;
    </>
  );
}

export default MyApp;
