import Link from 'next/link';

type NavbarLinkProps = {
  link: string,
  text: string,
}

export default function NavbarLink({ link, text }: NavbarLinkProps) {
  return (
    <Link href={link}>
      <li className="text-center text-black font-bold bg-gray-200 w-fit p-2 mr-2 h-8 flex justify-center items-center text-base lg:w-32 lg:mr-2 hover:bg-black hover:text-white">
      {text}
      </li>
    </Link>
  )
}
