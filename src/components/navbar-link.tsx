import Link from 'next/link';

type NavbarLinkProps = {
  link: string,
  text: string,
}

export default function NavbarLink({ link, text }: NavbarLinkProps) {
  return (
    <li className="text-center text-black font-bold bg-gray-200 w-32 h-8 flex justify-center items-center text-base mr-2 hover:bg-black hover:text-white">
      <Link href={link}>{text}</Link>
    </li>
  )
}
