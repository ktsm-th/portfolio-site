import Link from 'next/link';
import Image from 'next/image';

type ContactPillProps = {
  icon: string,
  text: string,
  link: string,
}

export default function SkillPill({ icon, text, link }: ContactPillProps) {
  return (
    <div className={"hover:drop-shadow-sm" }>
      <Link href={link} className={"text-center text-white font-bold bg-black rounded w-fit pr-2.5 pl-2.5 h-8 flex justify-center items-center text-base mt-1 mr-1"}>
        <Image
          src={icon}
          loading="lazy"
          width={25}
          height={25}
          alt={`${link} icon`}
          className="mr-2"
      />
        {text}
      </Link>
    </div>
  )
}
