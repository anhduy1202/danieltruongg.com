import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";
import { textVariants } from "../Greeting/Greeting";
import Heading1, { Paragraph1 } from "../Heading/Heading";
import { Spacing2 } from "../Spacing/Spacing";

interface aboutProps {
  isDesktop: boolean;
}

const About: React.FC<aboutProps> = (props) => {
  const { isDesktop } = props;
  const content = (
    <>
      I’m an international student from Vietnam who started
      programming back in 2020 and turned it into a hobby
      <br /> <br /> My experience is mostly about full-stack
      development but I also explore other fields like Data Science & Machine Learning
      <br /> <br /> Besides from programming, I also do mobile/web design, listen
      to music, go to the gym, and create content for my Youtube channel
    </>
  );
  return (
    <Spacing2>
      <motion.div
        className="mt-10"
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true }}
        variants={textVariants}
      >
        <Heading1 content="About" />
      </motion.div>
      <motion.div
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true }}
        variants={textVariants}
        className="flex md:w-[80%] flex-col items-center md:flex-row"
      >
        <div id="about" className="mt-10 md:mr-10 md:mb-10">
          <Image
            src="/avatar_desktop.png"
            alt="Daniel Truong's avatar"
            width={isDesktop ? 180 : 80}
            height={isDesktop ? 180 : 80}
          />
        </div>
        <Paragraph1 content={content} />
      </motion.div>
    </Spacing2>
  );
};

export default About;
