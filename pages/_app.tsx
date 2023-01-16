import type { AppProps } from "next/app";
import { ChainId, ThirdwebProvider } from "@thirdweb-dev/react";
import "../styles/globals.css";

const activeChainId = ChainId.Goerli;

function MyApp({ Component, pageProps }: AppProps) {

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
