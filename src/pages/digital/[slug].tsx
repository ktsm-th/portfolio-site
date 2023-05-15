import ListTile from '@/components/list-tile';
import Image from 'next/image'
import useSWR from 'swr';
import { useRouter } from 'next/router';
import ImageGallery from 'react-image-gallery';
import Link from 'next/link';

const fetcher = (url: string) => fetch(url).then((res) => res.json())

interface Digital {
  slug: string,
  name: string,
  description: string,
  number_of_images: number,
}

export default function PatternDetail() {
  const router = useRouter();
  const { data, error } = useSWR('/api/digital', fetcher);
  if (!data) return <div>Loading...</div>;
  const visual = JSON.parse(data).find((visual: Digital) => visual.slug === router.query.slug)
  if (!visual) return <div>Loading...</div>;
  const images = [];

  for (let i = 1; i <= visual.number_of_images; i++) {
    images.push({
      'original': `/digital-visuals/${visual.slug}/${i}.jpg`,
      'thumbmail': `/digital-visuals/${visual.slug}/${i}.jpg`,
    })
  }

  return (
    <main>
      <div className="flex justify-center mt-8 mb-8">
        <div className=" w-auto max-w-2xl border-8 border-black">
          <ImageGallery additionalClass="" items={images} />
        </div>

        <div className="w-96 ml-4">
          <h2 className="mt-4 font-bold text-3xl">{ visual.name }</h2>
          <p className="mt-2">{visual.description}</p>


          </div>
      </div>
    </main>
  )
}
