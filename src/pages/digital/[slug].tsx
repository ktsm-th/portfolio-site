import ListTile from '@/components/list-tile';
import Image from 'next/image'
import useSWR from 'swr';
import { useRouter } from 'next/router';
import ImageGallery from 'react-image-gallery';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import Spinner from '@/components/spinner';
import Head from 'next/head';

const fetcher = (url: string) => fetch(url).then((res) => res.json())

interface Digital {
  slug: string,
  name: string,
  description: string,
  number_of_images: number,
}

const DigitalDetail = () => {
  const router = useRouter();
  const { data, error } = useSWR('/api/digital', fetcher);
  if (!data) return <Spinner/>
  const visual = JSON.parse(data).find((visual: Digital) => visual.slug === router.query.slug)
  if (!visual) return <Spinner/>;
  const images = [];

  for (let i = 1; i <= visual.number_of_images; i++) {
    images.push({
      'original': `/digital-visuals/${visual.slug}/${i}.png`,
      'thumbmail': `/digital-visuals/${visual.slug}/${i}.png`,
    })
  }

  return (
    <main>
      <Head>
      <title>{visual.name} | Katie Smith</title>
      </Head>
      <div className="flex flex-col mx-4 lg:mx-0 lg:flex-row justify-center mt-8 mb-8">
        <div className="w-auto max-w-2xl border-8 border-black">
          <ImageGallery additionalClass="" items={images} />
        </div>
        <div className="flex flex-col items-center lg:block w-96 lg:ml-4">
          <h2 className="mt-4 font-bold text-3xl">{visual.name}</h2>
          <p className="mt-2">{visual.description}</p>
        </div>
      </div>
    </main>
  )
}

export default dynamic(() => Promise.resolve(DigitalDetail), {
  ssr: false,
});
