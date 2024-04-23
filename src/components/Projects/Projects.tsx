import { motion, Variants } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { languageType, projectType } from "../../interface/interface";
import { textVariants } from "../Greeting/Greeting";
import { Heading1, Heading2, Heading3 } from "../Heading/Heading";
import { Spacing1 } from "../Spacing/Spacing";

interface projectsProps {
  projects: projectType[];
  isDesktop: boolean;
}

const projectVariant: Variants = {
  offscreen: {
    y: 300,
  },
  onscreen: {
    y: 50,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 1,
    },
  },
};

const Projects: React.FC<projectsProps> = (props) => {
  const { projects, isDesktop } = props;

  return (
    <Spacing1>
      <>
        <motion.div
          className="mt-10"
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true }}
          variants={textVariants}
        >
          <Heading1 content="Projects" />
        </motion.div>
        <div className="md:flex md:flex-wrap md:items-center md:justify-center">
          {projects?.map((project) => {
            return (
              <div
                key={project.id}
                className="md:flex-[33%] md:items-center md:justify-center"
              >
                <Link href={project.link}>
                  <a target="_blank">
                    <Project
                      isDesktop={isDesktop}
                      link={project.link}
                      image={project.thumbnail}
                      desktop={project.desktop}
                      title={project.title}
                      languages={project.languages}
                      description={project.description}
                    />
                  </a>
                </Link>
              </div>
            );
          })}
        </div>
        <div className="mt-16 md:mt-20">
          <Link href="https://github.com/anhduy1202">
            <a target="_blank">
              <Heading2 content="See more on my Github" />
            </a>
          </Link>
        </div>
      </>
    </Spacing1>
  );
};

interface projectProps {
  image: string;
  desktop: string;
  link: string;
  title: string;
  languages: languageType[];
  description: string;
  isDesktop: boolean;
}

const Project: React.FC<projectProps> = (props) => {
  const { image, link, title, desktop, languages, description, isDesktop } =
    props;
  return (
    <motion.div
      id="projects"
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true }}
      variants={projectVariant}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 1 }}
      className="mt-10 relative text-center bg-white/10 text-white mx-[31px] rounded-xl cursor-pointer max-w-[300px] md:max-w-[500px] md:min-w-[300px] md:min-h-[490px] md:max-h-[490px]"
    >
      <Image
        src={isDesktop ? desktop : image}
        width={isDesktop ? "625" : "320"}
        height={isDesktop ? "324" : "149"}
        alt="cover image of my project"
      />
      <div className="flex text-start mx-4 flex-col">
        <Heading2 content={title} />
        <div className="flex flex-wrap gap-1 mb-2 text-8 font-bold">
          {languages.map((language, id) => {
            return (
              <div
                key={language.key}
                className="flex mr-2 mb-2 bg-sky-600 py-1 px-2 rounded-md"
              >
                <Language
                  isDesktop={isDesktop}
                  name={language.name}
                  icon={language.icon}
                />
              </div>
            );
          })}
        </div>
        <Heading3 content={description} />
      </div>
    </motion.div>
  );
};

interface languageProps {
  name: string;
  icon: string;
  isDesktop: boolean;
}

const Language: React.FC<languageProps> = (props) => {
  const { name, icon, isDesktop } = props;
  return (
    <>
      <Image
        src={icon}
        alt="language icon"
        width={isDesktop ? 20 : 14}
        height={isDesktop ? 20 : 14}
      />
      <p className="ml-1 md:text-14"> {name} </p>
    </>
  );
};

export default Projects;
