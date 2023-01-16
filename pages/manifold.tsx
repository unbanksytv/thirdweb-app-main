import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Manifold Free Mint</title>
        <meta name="Live The Life" content="LTL" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          <a href="https://docs.manifold.xyz/v/manifold-for-developers/client-widgets/overview">
            Manifold
          </a>
          <span> </span>
          Free Mint
        </h1>
        <br />

        {/* -- Add Connect Widget -- */}
        <div dangerouslySetInnerHTML={{ 
          __html: 
            `<div
              data-widget='m-connect'
              data-delay-auth='true'
              data-network='${process.env.NEXT_APP_NETWORK}'
            ></div>`
        }} />

        {/* ~~ Add Marketplace Widget component ~~ */}
        <div dangerouslySetInnerHTML={{ 
          __html: 
            `<div
              data-widget='m-layout-complete-listing'
              data-id='${process.env.NEXT_APP_MARKETPLACE_LISTING_ID}'
              data-network='${process.env.NEXT_APP_NETWORK}'
            ></div>`
        }} />
      </main>
    </div>
  )
}