import Image from "next/image";
import React from "react";
import Heading1, { Paragraph1 } from "../Heading/Heading";
import { Spacing2 } from "../Spacing/Spacing";

const About: React.FC = () => {
  const content = (
    <>
      I’m an international student from Vietnam who grows a passion with
      programming back in 2020 and start practicing it everyday to get better
      <br /> <br /> I’ve been spending most my times on building full-stack
      website and recently start to explore Data Science & Machine Learning
      <br /> <br /> Besides from programming, I’m also do graphic design, listen
      to music, go to the gym, and create content for my Youtube channel
    </>
  );
  return (
    <Spacing2>
      <Heading1 content="About" />
      <div className="mt-10">
        <Image
          src="/avatar.png"
          alt="Daniel Truong's avatar"
          width={80}
          height={80}
        />
      </div>
      <Paragraph1 content={content} />
    </Spacing2>
  );
};

export default About;
