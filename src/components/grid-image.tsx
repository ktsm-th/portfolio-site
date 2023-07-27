import Link from 'next/link';
import Image from 'next/image';

type GridImageProps = {
  image: string,
  width: number,
  height: number,
}

export default function GridImage({image, width, height}: GridImageProps) {
  return (
  <div>
        <Image
        src={image}
        width={width}
        height={height}
        alt={""}
        className="mr-1 border-8 border-black"
      />
    </div>
  )
}
