import type { AppProps } from "next/app";
import { ChainId, ThirdwebProvider } from "@thirdweb-dev/react";
import "../styles/globals.css";
import { useRouter } from 'next/router';
import { useEffect } from 'react'

const activeChainId = ChainId.Goerli;

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  useEffect(() => { 
    const handleRouteChange = (url, { shallow }) => {
      // Note: need to trigger a m-refresh-widgets event every time the URL changes client side
      window.dispatchEvent(new Event("m-refresh-widgets"));
    }
    router.events.on('routeChangeStart', handleRouteChange)
  
    // If the component is unmounted, unsubscribe
    // from the event with the `off` method:
    return () => {
      router.events.off('routeChangeStart', handleRouteChange)
    }
  }, )

  return (
    <ThirdwebProvider desiredChainId={activeChainId}>
      <Component {...pageProps} />
      <div>
      {/* -- Stylesheets for connect and marketplace widgets -- */}
      <link rel="stylesheet" href="https://connect.manifoldxyz.dev/2.0.13/connect.css"></link>
      <link rel="stylesheet" href="https://marketplace.manifoldxyz.dev/latest/marketplace.css" />
      <script src="https://connect.manifoldxyz.dev/latest/connect.umd.js" async></script>
      <script src="https://marketplace.manifoldxyz.dev/latest/marketplace.umd.js" async></script>
      <Component {...pageProps} />
    </div>
    </ThirdwebProvider>
  );
}

export default MyApp;
