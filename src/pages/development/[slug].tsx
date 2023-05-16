import ListTile from '@/components/list-tile';
import Image from 'next/image'
import useSWR from 'swr';
import { useRouter } from 'next/router';
import ImageGallery from 'react-image-gallery';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import Spinner from '@/components/spinner';

const fetcher = (url: string) => fetch(url).then((res) => res.json())

interface Project {
  slug: string,
  name: string,
  description: string,
  live_link: string,
  repository_link: string,
  number_of_images: number,
}

const PatternDetail = () => {
  const router = useRouter();
  const { data, error } = useSWR('/api/development', fetcher);
  if (!data) return <Spinner/>;
  const project = JSON.parse(data).find((project: Project) => project.slug === router.query.slug)
  if (!project) return <Spinner/>;
  const images = [];

  for (let i = 1; i <= project.number_of_images; i++) {
    images.push({
      'original': `/digital-links/${project.slug}/${i}.jpg`,
      'thumbmail': `/digital-links/${project.slug}/${i}.jpg`,
    })
  }

  return (
    <main>
      <div className="flex justify-center mt-8 mb-8">
        <div className=" w-auto max-w-2xl border-8 border-black">
          <ImageGallery additionalClass="" items={images} />
        </div>

        <div className="w-96 ml-4">
          <h2 className="mt-4 font-bold text-3xl">{ project.name }</h2>
          <p className="mt-2">{project.description}</p>

          <div className="inline-flex items-center justify-center w-full mt-24">
              <hr className="w-96 h-1  bg-black border-0 rounded" />
              <div className="absolute px-4 -translate-x--1/2  bg-white">
              <h3 className="font-bold text-l">LINKS</h3>
            </div>
          </div>

          <div className="flex items-center mt-4 hover:opacity-20">
            <Link className="flex" href={project.repository_link}>
              <Image
                src="/github.png"
                width={30}
                height={30}
                alt="github"
                />
                <li className="ml-2 mt-1">{project.repository_link}</li>
                </Link>
          </div>
          <div className="flex items-center mt-4 hover:opacity-20">
            <Link className="flex" href={project.live_link}>
              <Image
                src="/live.png"
                width={30}
                height={30}
                alt="live link"
                />
                <li className="ml-2 mt-1">{project.live_link}</li>
                </Link>
            </div>
          </div>
      </div>
    </main>
  )
}

export default dynamic(() => Promise.resolve(PatternDetail), {
  ssr: false,
});
