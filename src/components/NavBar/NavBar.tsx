import Link from "next/link";
import React from "react";
import { navLink } from "../../interface/interface";

const links: navLink[] = [
  {
    title: "Projects",
    href: "#projects",
  },
  {
    title: "About",
    href: "#about",
  },
  {
    title: "Experience",
    href: "#experience",
  },
  {
    title: "Contact",
    href: "#contact",
  },
];

const NavBar: React.FC = () => {
  return (
    <nav>
      <ul className="flex flex-row justify-between font-bold">
        {links.map((link, id) => {
          return (
            <Link key={id} href={link.href}>
              <li className="cursor-pointer hover:text-blue-400 duration-300">
                {link.title}
              </li>
            </Link>
          );
        })}
      </ul>
    </nav>
  );
};

export default NavBar;
