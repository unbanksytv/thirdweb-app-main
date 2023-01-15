import { FaTwitter, FaDiscord } from 'react-icons/fa'
import Link from 'next/link'

const FOOTER_ENABLED = process.env.NEXT_PUBLIC_FOOTER_ENABLED == 'true'

const Footer = () => {
  if (FOOTER_ENABLED)
    return (
      <footer className="col-span-full flex flex-col items-center justify-between px-6 pb-12 sm:flex-row md:px-16">
        <div className="mb-6 flex flex-row flex-wrap items-center justify-between gap-x-6 text-xs sm:mb-0 sm:gap-x-8 sm:text-sm">
          <Link href="https://livethelife.tv/about/" legacyBehavior={true}>
            <a className="" target="_blank" rel="noreferrer">
              About
            </a>
          </Link>
          <Link href="https://www.spatial.io/s/Dimitri-Daniloff-Archives-623b8117adfe8400016206e1?share=3556738684388152605&utm_source=%252Fspaces" legacyBehavior={true}>
            <a className="min-w-max" target="_blank" rel="noreferrer">
              MetaGallery
            </a>
          </Link>
          <Link href="https://www.premint.xyz/livethelifetv/" legacyBehavior={true}>
            <a className="min-w-max" target="_blank" rel="noreferrer">
              PreMint AllowList
            </a>
          </Link>
        </div>
        <div className="flex flex-row items-center gap-x-6">
          <Link href="https://twitter.com/livethelifetv" legacyBehavior={true}>
            <a className="" target="_blank" rel="noreferrer">
              <FaTwitter className="h-[20px] w-[25px]" />
            </a>
          </Link>
          <Link href="https://discord.gg/EygNmQEm8b" className="ml-5" legacyBehavior={true}>
            <a className="" target="_blank" rel="noreferrer">
              <FaDiscord className="h-[19px] w-[25px]" />
            </a>
          </Link>
        </div>
      </footer>
    )

  return null
}

export default Footer
