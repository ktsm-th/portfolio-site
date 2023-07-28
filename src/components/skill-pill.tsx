import Link from 'next/link';
import Image from 'next/image';

type SkillPillProps = {
  icon: string,
  name: string,
}

export default function SkillPill({ icon, name }: SkillPillProps) {
  return (
    <div className={"hover:drop-shadow-sm flex" }>
      <p className={"text-center text-white font-bold bg-black rounded w-fit pr-2.5 pl-2.5 h-8 flex justify-center items-center text-base mt-1 mr-1"}>
        <Image
        src={icon}
        width={25}
        height={25}
        alt={`${name} icon`}
        className="mr-1"
      />
        {name}
      </p>
    </div>
  )
}
