import Head from 'next/head';
import Image from 'next/image'
import Link from 'next/link';
import SkillPill from '@/components/skill-pill';
import GridImage from '@/components/grid-image';
import ContactPill from '@/components/contact-pill';

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
            height={500}
            width={500}
            alt="Profile Image"
            className=" w-96 border-8 border-black"
          />
        </div>
        <div className="w-96 ml-8">
          <h2 className="font-bold text-3xl">KATIE SMITH</h2>
          <h3 className="font-bold text-l ml-16">Software Developer & Textile Designer</h3>
          <div>
            <p className="mt-8 tracking-wide">A Software Developer and Textile Design graduate with skills in both and front-end and back-end development (React/Next.js, Laravel). Eager to start a career within the tech industry to expand my skilset within a professional enviroment.</p>
            <div className="inline-flex items-center justify-center w-full">
              <hr className="w-96 h-1 my-8 bg-black border-0 rounded" />
              <div className="absolute px-4 bg-black">
                <h3 className="font-bold text-l text-white">Contact Me</h3>
              </div>
            </div>
            <div className="flex justify-center mb-2">
              <div className="w-96 ml-8 flex content-center">
                <ul className="w-auto">
                  <div className="flex items-center hover:opacity-70">
                    <ContactPill
                      icon={"/icons/w-github.png"}
                      text={"/ktsm-th"}
                      link={"https://github.com/ktsm-th"}
                    />
                  </div>
                  <div className="flex items-center hover:opacity-70">
                    <ContactPill
                      icon={"/icons/w-linkedin.png"}
                      text={"/katie-smith-dev"}
                      link={"https://www.linkedin.com/in/katie-smith-dev/"}
                    />
                  </div>
                  <div className="flex items-center hover:opacity-70">
                    <ContactPill
                      icon={"/icons/w-instagram.png"}
                      text={"/ktsm.thbcu"}
                      link={"https://www.instagram.com/ktsm.thbcu/"}
                    />
                  </div>
                  <div className="flex items-center">
                    <ContactPill
                      icon={"/icons/w-email.png"}
                      text={"hello@katiesmith.dev"}
                      link={""}
                    />
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
      <div className="">
        <h2 className="font-bold text-3xl mb-8 flex justify-center">WHO AM I?</h2>
        <div className="flex justify-center">
          <p className='w-auto max-w-3xl mb-8 tracking-wide'>
            Hello! I&apos;m Katie, an aspiring software developer and Textile Design graduate. I am self-taught, and learnt to code alongside studying for my degree and have
            found that I love creating with React/Next.js and style frameworks, mainly Tailwind. I also have experience in the standard front-end languages
            (HTML, CSS, Javascript) and working alongside external APIs, as  well as my own APIs created in Laravel with unit tests.
          </p>
        </div>
        <div className="flex flex-wrap justify-center mb-8">
          <div className="flex max-w-3xl">
            <SkillPill name={'React.js'} icon={'/react.png'} />
            <SkillPill name={'Next.js'} icon={'/next.png'}/>
            <SkillPill name={'Laravel'} icon={'/laravel.png'} />
            <SkillPill name={'TailwindCSS'} icon={'/tailwind.png'}/>
            <SkillPill name={'HTML'} icon={'/html.png'}/>
            <SkillPill name={'CSS'} icon={'/css.png'}/>
            <SkillPill name={'Javascript'} icon={'/javascript.png'} />
            </div>
        </div>
        <div className="flex justify-center">
          <p className='w-auto max-w-3xl mb-8 tracking-wide'>
            From a more personal standpoint, I&apos;m always listening to music and going to gigs - my favourite artists at the minute are Yard Act, New Order, Blink-182 and Pulp,
            but I&apos;m always listening to different things. In my spare time I play lots of different games and have a love for older consoles, I also love fitness, sewing,
            collecting plants and playing bass. Most importantly though I spend my time looking after my cat, Sushi.
          </p>
        </div>
        <div className="">
          <div className="flex flex-wrap justify-center">
            <GridImage image={"/personal/2.png"} width={400} height={400} />
            </div>
        </div>
      </div>
    </main>
  )
}
