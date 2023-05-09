import Image from 'next/image'
export default function About() {
  return (
    <main>
      <div className="flex justify-center mt-8 mb-8">
        <div>
          <Image
              src="/placeholder.jpg"
              width={500}
              height={500}
            alt="digital placeholder"
            className=" w-96 border-8 border-black"
            />
        </div>
        <div className="w-96 ml-8">
          <h2 className="font-bold text-3xl">NAME</h2>
          <h3 className="font-bold text-l ml-16">MADE USING</h3>
          <p className="mt-8">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi sint consequuntur deleniti eligendi earum! Debitis id consequatur et saepe impedit explicabo veniam. Totam quaerat cum culpa. Placeat nisi perferendis suscipit!</p>

          <ul className="mt-8 font-bold">
            <li>link.linklinklinklinklink.live.link</li>
            <li>link.linklinklinklinklink.repository.link</li>
          </ul>
        </div>

      </div>
    </main>
  )
}
