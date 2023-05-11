import Link from 'next/link';
import NavbarLink from './navbar-link';
export default function Navbar() {
  return (
    <nav>
      <ul className="flex flex-row justify-center mt-6 mb-2">
        <NavbarLink link="/" text="Home" />
        <NavbarLink link="/about" text="About Me" />
        <NavbarLink link="/patterns" text="Design" />
        <NavbarLink link="/digital" text="Digital" />
        <NavbarLink link="/development" text="Development" />
      </ul>
    </nav>
  )
}
