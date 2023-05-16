import Link from 'next/link';
import NavbarLink from './navbar-link';
export default function Navbar() {
  return (
    <nav>
      <ul className="flex flex-row justify-center mt-6 mb-2">
        {/* <NavbarLink link="/" text="Home" /> */}
        <NavbarLink link="/" text="About Me" />
        <NavbarLink link="/patterns" text="Patterns" />
        <NavbarLink link="/digital" text="Digital" />
        <NavbarLink link="/development" text="Development" />
      </ul>
    </nav>
  )
}
