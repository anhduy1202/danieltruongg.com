/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import React from "react";
import Link from "next/link";
import Heading1 from "../Heading/Heading";

const Greeting: React.FC = () => {
  return (
    <section className="font-bold mt-[9em] text-center">
      <div className="text-34">Xin chao, </div>
      <div className="text-34">
        I'm <Heading1 content="Daniel Truong" />
      </div>
      <div className="text-14 mt-3">
        CSUF'24 | Software Engineer | Graphic Designer
      </div>
      <div className="mt-9">
        <Image
          width={115}
          height={115}
          src="/memoji.png"
          alt="A 3D Picture of Daniel Truong"
        />
      </div>
      <div className="flex justify-center mt-10">
        <Link href="https://drive.google.com/file/d/1lB359tfZ9GlfPEDHKpD2R3Db5-AJi9v7/view?usp=sharing">
          <a
            target="_blank"
            className="text-dark-700 bg-blue-400 p-2 rounded-[8px] cursor-pointer hover:bg-blue-600 hover:text-white transition-all duration-300"
          >
            My resume
          </a>
        </Link>
      </div>
    </section>
  );
};

export default Greeting;
