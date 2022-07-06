import React from "react";
import * as Scroll from "react-scroll";
import {
  Link,
  Button,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from "react-scroll";
import { navLink } from "../../interface/interface";

const links: navLink[] = [
  {
    title: "Projects",
    href: "projects",
  },
  {
    title: "About",
    href: "about",
  },
  {
    title: "Experience",
    href: "experience",
  },
  {
    title: "Contact",
    href: "contact",
  },
];

const NavBar: React.FC = () => {
  return (
    <nav>
      <ul className="flex flex-row justify-between font-bold md:text-20 md:justify-center md:gap-20 md:bg-white/10 md:p-4 md:rounded-lg">
        {links.map((link, id) => {
          return (
            <Link
              key={id}
              to={link.href}
              spy={true}
              smooth={true}
              duration={900}
              offset={-100}
            >
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
