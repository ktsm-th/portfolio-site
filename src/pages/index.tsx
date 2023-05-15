import Image from 'next/image'
import Link from 'next/link';
export default function About() {
  return (
    <main>
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
          <p className="mt-8">Hello! I'm Katie, a soon-to-be Textile Design graduate who has been working on expanding development skills alongside my degree, focusing on Javascript (React, next.js) and creating & using REST APIs. Driven and eager for self improvement, as well as the development of my skills through the support of a team, while also expanding the ability to troubleshoot and solve issues independently. Hoping to start a career within the software development industry, particularly within tech for good.</p>
        </div>
      </div>
      <div className="inline-flex items-center justify-center w-full">
          <hr className="w-96 h-1 my-8 bg-black border-0 rounded" />
          <div className="absolute px-4 -translate-x-1/2  bg-white left-1/2">
          <h3 className="font-bold text-l">Contact Me</h3>
        </div>
      </div>

      <div className="flex justify-center mb-8">
        {/* <div className="w-96 ml-8" >
          <form action="/send-data-here" method="post">
            <div className="flex">
            <div className="w-1/2 mr-1">
              <label className="font-bold text-l" for="first">First name:</label>
                  <input  className="w-auto border-2" type="text" id="first" name="first" />
            </div>
            <div className="w-1/2 ml-1">
              <label className="font-bold text-l" for="last">Last name:</label>
                <input className="w-full border-2" type="text" id="last" name="last" />
                </div>
            </div>
            <div className="mt-4">
              <label className="font-bold text-l" for="email">Email:</label>
                <input className="w-full border-2" type="text" id="email" name="email" />
            </div>
            <div className="mt-4">
              <label className="font-bold text-l" for="message">Message:</label>
                <textarea id="message" name="message" className="block p-2.5 w-full h-24 text-sm text-gray-900 bg-white border-2 focus:ring-0 focus:ring-0 resize-none" />
              </div>

          <button type="submit" className="text-center text-black font-bold bg-gray-200 w-32 h-8 mt-4 flex justify-center items-center text-base mr-2 hover:bg-black hover:text-white">SEND</button>
        </form>
        </div> */}
        <div className="w-96 ml-8 flex content-center">
          <ul>
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
            <Link className="flex" href="https://www.linkedin.com/in/katie-smith-786978232/">
              <Image
                src="/linkedin.png"
                width={30}
                height={30}
                alt="linkedIn"
                className=""
                />
              <li className="ml-2 font-">/katie-smith-786978232</li>
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
        </div>
      </div>
    </main>
  )
}
