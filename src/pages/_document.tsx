import Navbar from '@/components/navbar'
import { Html, Head, Main, NextScript } from 'next/document'
import Link from 'next/link'
import Image from 'next/image'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="shortcut icon" href="/favicon.png" />
      </Head>
      <body>
        <header>
          <div className="bannerIMG w-full flex justify-center items-center h-28 bg-header-img bg-cover bg-center">
            <Link href="/">
              <h1 className="text-center text-white font-bold bg-black w-96 h-16 flex justify-center items-center text-5xl">KATIE SMITH
                </h1>
              </Link>
            </div>
        </header>
        <Navbar></Navbar>
        <Main />
        <NextScript />
        <div className="bannerIMG w-full flex justify-center items-center h-14 bg-header-img bg-cover bg-center mt-8"></div>
      </body>
    </Html>
  )
}
