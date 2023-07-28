import Link from 'next/link';

type NavbarLinkProps = {
  link: string,
  text: string,
}

export default function NavbarLink({ link, text }: NavbarLinkProps) {
  return (
    <Link href={link}>
      <li className="text-center text-white font-bold bg-black rounded drop-shadow-[0px_4px_0px_rgba(216,52,68,1)] w-fit p-2 mr-2 h-8 flex justify-center items-center text-base lg:w-32 lg:mr-2 hover:opacity-70 hover:text-white">
      {text}
      </li>
    </Link>
  )
}
