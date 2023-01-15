import {
  ConnectWallet,
  useAddress,
  useContract,
  useContractRead,
  Web3Button,
} from '@thirdweb-dev/react';
import { utils } from 'ethers';
import type { NextPage } from "next";
import { useState } from 'react';
import styles from "../styles/Home.module.css";
import Footer from '../components/Footer'

const Home: NextPage = () => {
  const contractAddress = '0x6Aba324f29e405cef5976AF16f5296E7F75f2A3c';
  const address = useAddress();
  const [quantity, setQuantity] = useState('1');
  const { contract } = useContract(contractAddress);
  const { data: price, isLoading } = useContractRead(
    contract,
    'priceForAddress',
    address,
    quantity,
  );

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>
            ! {' '}
            <a href="https://livethelife.tv/">
              LTL Guest Pass
            </a>
             !
          </h1>
        <br ></br>
        <div>
        <label>
            Quantity:
            <input
              type="number"
              value={quantity}
              min="1"
              onChange={(e) => setQuantity(e.target.value)}
            />
          </label>
          <br ></br>
        </div>

        <div style={{ marginTop: '10px' }}>
          <Web3Button
            contractAddress={contractAddress}
            action={(contract) => {
              contract.call('claim', address, quantity, {
                value: price,
              });
            }}
            isDisabled={!quantity || parseInt(quantity) < 1 || isLoading}
          >
            Mint{' '}
            {price
              ? `(${
                  price?.toString() === '0'
                    ? 'Free'
                    : `${utils.formatEther(price)} ETH`
                })`
              : ''}
          </Web3Button>
        </div>

        <br ></br>

        <div className={styles.grid}>
          <a href="https://livethelife.tv/about/" className={styles.card}>
            <h2>LTL Art Collective &rarr;</h2>
            <p>
            We love photography and photogrammetry. Bluntly and deeply. This very pole enables us to build and propel the future of meta, and media.
            </p>
          </a>

          <a href="https://livethelife.tv/fmp-faq/" className={styles.card}>
            <h2>Founder Mint Pass &rarr;</h2>
            <p>
            LTL is an on-chain auction platform dedicated to exceptional photography. Discover and bid on exclusive drops, curated by Florence. 
            </p>
          </a>

          <a
            href="https://livethelife.tv/dda-collection/"
            className={styles.card}
          >
            <h2>Genesis Collection &rarr;</h2>
            <p>
            For over a decade, the award-winning photographer Dimitri Daniloff has been among the top 10 advertising photographers in the world. 
            </p>
          </a>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
