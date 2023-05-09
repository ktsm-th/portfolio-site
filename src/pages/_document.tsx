import Navbar from '@/components/navbar'
import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
      <header>
            <div className="bannerIMG w-full flex justify-center items-center h-28 bg-header-img bg-cover bg-center">
              <h1 className="text-center text-white font-bold bg-black w-96 h-16 flex justify-center items-center text-5xl">KATIE SMITH</h1>
            </div>
        </header>
        <Navbar></Navbar>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
