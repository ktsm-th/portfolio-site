import Head from 'next/head';
import Image from 'next/image'
import Link from 'next/link';
export default function About() {
  return (
    <main>
      <Head>
        <title>Katie Smith</title>
      </Head>
      <div className="flex justify-center mt-8 mb-8">
        <div>
          <Image
              src="/portrait-img.png"
              width={500}
              height={500}
            alt="Profile Image"
            className=" w-96 border-8 border-black"
            />
        </div>
        <div className="w-96 ml-8">
          <h2 className="font-bold text-3xl">KATIE SMITH</h2>
          <h3 className="font-bold text-l ml-16">Software Developer & Textile Designer</h3>
          <div>
            <p className="mt-8">A Software Developer and Textile Design graduate with skills in both and front-end and back-end development (React/Next.js, Laravel). Eager to start a career within the tech industry to expand my skilset within a professional enviroment.</p>
            <div className="inline-flex items-center justify-center w-full">
              <hr className="w-96 h-1 my-8 bg-black border-0 rounded" />
              <div className="absolute px-4 bg-black">
                <h3 className="font-bold text-l text-white">Contact Me</h3>
              </div>
      </div>

     <div className="flex justify-center mb-8">
        <div className="w-96 ml-8 flex content-center">
          <ul className="w-auto">
            <div className="flex items-center hover:opacity-20">
            <Link className="flex" href="https://github.com/ktsm-th">
              <Image
                src="/github.png"
                width={30}
                height={30}
                alt="github"
                />
                <li className="ml-2 mt-1">/ktsm-th</li>
                </Link>
            </div>
            <div className="flex items-center mt-3 hover:opacity-20">
            <Link className="flex" href="https://www.linkedin.com/in/katie-smith-dev/">
              <Image
                src="/linkedin.png"
                width={30}
                height={30}
                alt="linkedIn"
                className=""
                />
              <li className="ml-2 font-">/katie-smith-dev</li>
              </Link>
            </div>
            <div className="flex items-center mt-3 hover:opacity-20">
            <Link className="flex" href="https://www.instagram.com/ktsm.thbcu/">
              <Image
                src="/instagram.png"
                width={30}
                height={30}
                alt="instragram"
                className=""
                />
                <li className="ml-2">/ktsm.thbcu</li>
                </Link>
            </div>
            <div className="flex items-center mt-3">
              <Image
                src="/email.png"
                width={30}
                height={30}
                alt="email"
                className=""
                />
                <li className="ml-2">hello@katiesmith.dev</li>
            </div>
          </ul>
          <div className="flex justify-end mt-2" >
            <Image
                src="/favicon.png"
                alt="Favicon Image"
                height="100"
                width="100"
                className="w-32 mb-4"
              />
            </div>
        </div>
      </div>

          </div>
        </div>
      </div>

    </main>
  )
}
