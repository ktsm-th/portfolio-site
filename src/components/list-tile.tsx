import Link from 'next/link';
import Image from 'next/image'

type ListTileProps = {
  link: string,
  name: string,
  image: string,
  number_of_images: number,
  mirror?: boolean
}

export default function ListTile({ link, name, image, mirror = false }: ListTileProps) {
  return (
    <div className={`flex sm-desktop:justify-end sm-desktop:flex-row flex-col-reverse basis-1/2 mt-4 ${mirror ? "sm-desktop:align-self-start sm-desktop:flex-row-reverse sm-desktop:pl-2" : "sm-desktop:pr-2"}`}>
      <div className={`sm-desktop:self-end mb-4 flex flex-col items-center ${mirror ? "sm-desktop:ml-4 sm-desktop:justify-start sm-desktop:items-start" : "sm-desktop:mr-4"}`}>
        <h3 className={`font-bold text-xl mt-2 sm-desktop:mt-0 ${mirror ? "" : "sm-desktop:text-right sm-desktop:ml-auto"}`}>{name}</h3>
        <button className={`text-center text-white font-bold bg-black w-24 h-8 flex justify-center items-center text-base mt-1 hover:bg-gray-200 hover:text-black ${mirror ? "" : "sm-desktop:ml-auto"}`}>
          <Link href={link}>DETAILS</Link>
        </button>
      </div>
      <Image
        src={image}
        width={275}
        height={275}
        alt="Profile Image"
        className=" border-8 border-black w-[275px] h-[275px] object-cover object-top"
      />
    </div>
  )
}
