import ListTile from '@/components/list-tile';
import dynamic from 'next/dynamic';
import Head from 'next/head';
import Image from 'next/image'
import useSWR from 'swr';
import Spinner from '@/components/spinner';

const fetcher = (url: string) => fetch(url).then((res) => res.json())

interface Pattern {
  slug: string,
  name: string,
  description: string,
  number_of_images: number,
}

const Pattern = () => {
  const { data, error } = useSWR('/api/patterns', fetcher);
  if (!data) return <Spinner/>;
  return (
    <main className="flex w-4/5 mx-auto flex-col sm-desktop:flex-row items-center sm-desktop:flex-wrap">
      <Head>
        <title>Patterns | Katie Smith</title>
      </Head>
      <div className='w-3/4 mx-auto'>
        <h2 className="font-bold text-3xl mt-2 text-center">PATTERN CATALOGUE</h2>
        <div className="inline-flex items-center justify-center w-full">
          <hr className="w-full h-1 my-8 bg-black  border-0 rounded" />
          <div className="absolute px-4 -translate-x-1/2 bg-white left-1/2">
          <h3 className="font-bold text-center text-l">A range of patterns which emphasise my passion for hectic colour and abstract imagery. </h3>
         </div>
        </div>
        </div>

      {JSON.parse(data).map((pattern: Pattern, index: number) => (
        <ListTile
          key={index}
          name={pattern.name}
          link={`/patterns/${pattern.slug}`}
          image={`/patterns/${pattern.slug}/1.png`}
          mirror={ index % 2 == 1 ? true : false }
        />
      ))}
    </main>
  )
}

export default dynamic(() => Promise.resolve(Pattern), {
  ssr: false,
});
