import ListTile from '@/components/list-tile';
import Image from 'next/image'
import useSWR from 'swr';
import { useRouter } from 'next/router';

const fetcher = (url:string) => fetch(url).then((res) => res.json())

export default function PatternDetail() {
  const router = useRouter();
  const { data, error } = useSWR('/api/patterns', fetcher);
  if (!data) return <div>Loading...</div>;
  const pattern = JSON.parse(data).find((pattern) => pattern.slug === router.query.slug)
  if (!pattern) return <div>Loading...</div>;
  return (
    <main>
      <div className="flex justify-center mt-8 mb-8">
        <div>
          <Image
              src={`/patterns/${pattern.slug}/1.jpg`}
              width={500}
              height={500}
            alt="digital placeholder"
            className=" w-96 border-8 border-black"
            />
        </div>
        <div className="w-96 ml-8">
          <h2 className="font-bold text-3xl">{ pattern.name }</h2>
          <p className="mt-8">{ pattern.description }</p>
        </div>

      </div>
    </main>
  )
}
