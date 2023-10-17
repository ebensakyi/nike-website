import Link from "next/link"
import Image from 'next/image'
import { headerLogo } from "../../public/assets/images";
import { hamburger } from '../../public/assets/icons'
import { navLinks } from "@/constants";

const Nav = () => {
  return (
    <header className="padding-x py-8 absolute z-10 w-full">
      <nav className="flex justify-between items-center max-container">
        <Link href="/">
          <Image alt="Logo" src={headerLogo} />
        </Link>
        <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">

          {navLinks.map((item) => (
            <li key={item.label}>
              <Link className="font-montserrat leading-normal text-lg text-slate-gray " href={item.href}>{item.label}</Link>
            </li>
          ))}

        </ul>
        <div className="hidden max-lg:block">
          <Image src={hamburger} alt="Hamburger" width={25} height={25} />

        </div>
      </nav>
    </header>
  )
}

export default Nav