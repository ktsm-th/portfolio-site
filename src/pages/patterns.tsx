import ListTile from '@/components/list-tile';
import Image from 'next/image'
import useSWR from 'swr';
const fetcher = (url:string) => fetch(url).then((res) => res.json())

export default function Pattern() {
  const { data, error } = useSWR('/api/patterns', fetcher);
  if (!data) return <div>Loading...</div>;
  return (
    <main className="flex items-center flex-wrap w-1/2 mx-auto">
      {JSON.parse(data).map((pattern: object, index: number) => (
        <ListTile
          key={index}
          link={`/patterns/${pattern.slug}`}
          name={pattern.name}
          image={`/patterns/${pattern.slug}/1.jpg`}
          mirror={ index % 2 == 1 ? true : false }
        />
      ))}
    </main>
  )
}
