import ListTile from '@/components/list-tile';
import Image from 'next/image'
import useSWR from 'swr';
import { useRouter } from 'next/router';
import ImageGallery from 'react-image-gallery';
import dynamic from 'next/dynamic';

const fetcher = (url: string) => fetch(url).then((res) => res.json())

interface Pattern {
  slug: string,
  name: string,
  description: string,
  number_of_images: number,
}

const PatternDetail = () => {
  const router = useRouter();
  const { data, error } = useSWR('/api/patterns', fetcher);
  if (!data) return <div>Loading...</div>;
  const pattern = JSON.parse(data).find((pattern: Pattern) => pattern.slug === router.query.slug)
  if (!pattern) return <div>Loading...</div>;
  const images = [];

  for (let i = 1; i <= pattern.number_of_images; i++) {
    images.push({
      'original': `/patterns/${pattern.slug}/${i}.jpg`,
      'thumbmail': `/patterns/${pattern.slug}/${i}.jpg`,
    })
  }

  return (
    <main>
      <div className="flex justify-center mt-8 mb-8">
        <div className=" w-auto max-w-2xl border-8 border-black">
          <ImageGallery additionalClass="" items={images} />
        </div>
        <div className="w-96 ml-4">
          <h2 className="mt-4 font-bold text-3xl">{ pattern.name }</h2>
          <p className="mt-2">{ pattern.description }</p>
        </div>

      </div>
    </main>
  )
}

export default dynamic(() => Promise.resolve(PatternDetail), {
  ssr: false,
});
