import ListTile from '@/components/list-tile';
import useSWR from 'swr';
const fetcher = (url: string) => fetch(url).then((res) => res.json())

interface Project {
  slug: string,
  name: string,
  description: string,
  live_link: string,
  repository_link: string,
  number_of_images: number,
}

export default function Development() {
  const { data, error } = useSWR('/api/development', fetcher);
  if (!data) return <div>Loading...</div>;
  return (
    <main className="flex w-4/5 mx-auto flex-col sm-desktop:flex-row items-center sm-desktop:flex-wrap">
      <div className='w-3/4 mx-auto'>
        <h2 className="font-bold text-3xl mt-2 text-center">DEVELOPMENT PROJECTS</h2>
        <div className="inline-flex items-center justify-center w-full">
          <hr className="w-full h-1 my-8 bg-black  border-0 rounded" />
          <div className="absolute px-4 -translate-x-1/2 bg-white left-1/2">
          <h3 className="font-bold text-center text-l">A selection of development projects which focus on HTML, CSS and Javascript, as well as frameworks such as React and Tailwind.</h3>
         </div>
        </div>
        </div>

      {JSON.parse(data).map((project: Project, index: number) => (
        <ListTile
          key={index}
          name={project.name}
          link={`development/${project.slug}`}
          image={`/digital-links/${project.slug}/1.jpg`}
          mirror={ index % 2 == 1 ? true : false }
        />
      ))}
    </main>
  )
}