import Link from "next/link";
import React from "react";

const NavBar: React.FC = () => {
  return (
    <nav>
      <ul className="flex flex-row justify-between font-bold">
        <Link href="#projects">
          <li className="cursor-pointer hover:text-blue-400 duration-300">
            Projects
          </li>
        </Link>
        <Link href="#about">
          <li className="cursor-pointer hover:text-blue-400 duration-300">
            About
          </li>
        </Link>
        <Link href="#experience">
          <li className="cursor-pointer hover:text-blue-400 duration-300">
            Experience
          </li>
        </Link>
        <Link href="#contact">
          <li className="cursor-pointer hover:text-blue-400 duration-300">
            Contact
          </li>
        </Link>
      </ul>
    </nav>
  );
};

export default NavBar;
