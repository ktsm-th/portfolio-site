import Link from 'next/link';
import Image from 'next/image';

type GridImageProps = {
  image: string,
  width: number,
  height: number,
}

export default function GridImage({image, width, height}: GridImageProps) {
  return (
  <div className="mr-2 mb-2">
        <Image
        src={image}
        loading="lazy"
        width={width}
        height={height}
        alt={""}
        className="border-8 border-black max-h-56 w-fit"
      />
    </div>
  )
}
