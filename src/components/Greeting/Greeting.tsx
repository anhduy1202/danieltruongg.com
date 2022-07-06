/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import React from "react";
import Link from "next/link";
import Heading1 from "../Heading/Heading";

interface greetingProps {
  isDesktop: boolean;
}

const Greeting: React.FC<greetingProps> = (props) => {
  const { isDesktop } = props;
  return (
    <section className="font-bold mt-[9em] text-center">
      <div className="md:flex md:justify-center md:items-center">
        <div className="md:flex md:flex-col">
          <div className="text-34 md:text-42">Xin chao, </div>
          <div className="text-34 md:text-42">
            I'm <Heading1 content="Daniel Truong" />
          </div>
        </div>
        {isDesktop && (
          <div className="mt-9 md:absolute md:right-[28%] md:top-[22%]">
            <Image
              width={120}
              height={120}
              src="/memoji.png"
              alt="A 3D Picture of Daniel Truong"
            />
          </div>
        )}
      </div>
      <div className="text-14 mt-3 md:text-20">
        CSUF'24 | Software Engineer | Graphic Designer
      </div>
      {!isDesktop && (
        <div className="mt-9">
          <Image
            width={115}
            height={115}
            src="/memoji.png"
            alt="A 3D Picture of Daniel Truong"
          />
        </div>
      )}
      <div className="flex justify-center mt-10">
        <Link href="https://drive.google.com/file/d/1EIk0uMP8DSJ5Fnw3wmwl7VjCtlS-ZM4H/view?usp=sharing">
          <a
            target="_blank"
            className="text-dark-700 bg-blue-400 p-2 rounded-[8px] cursor-pointer hover:bg-blue-600 hover:text-white transition-all duration-300 md:text-20"
          >
            My resume
          </a>
        </Link>
      </div>
    </section>
  );
};

export default Greeting;
