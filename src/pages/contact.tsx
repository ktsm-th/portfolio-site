import Image from 'next/image'
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
          <h2 className="font-bold text-3xl">CONTACT ME</h2>
          <h3 className="font-bold text-l ">placeholder</h3>
          <ul className="mt-8">
            <div className="flex items-center mt-3 hover:opacity-80">
            <Image
              src="/github.png"
              width={30}
              height={30}
              alt="github"
              className=""
              />
              <li className="ml-2">/ktsm-th</li>
            </div>
            <div className="flex items-center mt-3">
            <Image
              src="/linkedin.png"
              width={30}
              height={30}
              alt="linkedIn"
              className=""
              />
              <li className="ml-2">/katie-smith-786978232</li>
            </div><div className="flex items-center mt-3">
            <Image
              src="/instagram.png"
              width={30}
              height={30}
              alt="instragram"
              className=""
              />
              <li className="ml-2">/ktsm.thbcu</li>
            </div><div className="flex items-center mt-3">
            <Image
              src="/email.png"
              width={30}
              height={30}
              alt="email"
              className=""
              />
              <li className="ml-2">katie.whatever@whateverdomain.i.get</li>
            </div>
          </ul>
          <h3 className="font-bold text-l mt-4">THIOS WILL BE A FORM ! </h3>


        </div>

      </div>
    </main>
  )
}
