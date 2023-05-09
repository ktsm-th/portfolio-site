import Link from 'next/link';
import Image from 'next/image'

type ListTileProps = {
  link: string,
  name: string,
  image: string,
  mirror?: boolean
}

export default function ListTile({ link, name, image, mirror = false }: ListTileProps) {
  return (
    <div className={`flex justify-around basis-2/4 mt-4 ${mirror ? "align-self-start flex-row-reverse" : ""}`}>
      <div className="self-end mb-4 flex flex-col">
        <h3 className="font-bold text-right text-xl ml-auto mr-4">{name}</h3>
        <button className="ml-auto text-center text-white font-bold bg-black w-24 h-8 flex justify-center items-center text-base mr-4 mt-1 hover:bg-gray-200 hover:text-black  ">
          <Link href={link}>DETAILS</Link>
        </button>
      </div>
      <Image
        src={image}
        width={275}
        height={275}
        alt="Profile Image"
        className=" border-8 border-black w-72 h-72 object-cover"
      />
    </div>
  )
}
