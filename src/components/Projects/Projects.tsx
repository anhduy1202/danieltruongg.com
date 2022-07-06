import Image from "next/image";
import Link from "next/link";
import React from "react";
import { languageType, projectType } from "../../interface/interface";
import { Heading1, Heading2, Heading3 } from "../Heading/Heading";
import { Spacing1 } from "../Spacing/Spacing";

interface projectsProps {
  projects: projectType[];
  isDesktop: boolean;
}

const Projects: React.FC<projectsProps> = (props) => {
  const { projects, isDesktop } = props;
  return (
    <Spacing1>
      <>
        <Heading1 content="Projects" />
        <div className="md:flex md:flex-wrap md:items-center md:justify-center">
          {projects.map((project) => {
            return (
              <div key={project.id} className="md:flex-[33%] md:items-center md:justify-center">
                <Project
                  isDesktop={isDesktop}
                  link={project.link}
                  image={project.thumbnail}
                  desktop={project.desktop}
                  title={project.title}
                  languages={project.languages}
                  description={project.description}
                />
              </div>
            );
          })}
        </div>
        <div className="mt-4">
          <Link href="https://github.com/anhduy1202">
            <a target="_blank">
              <Heading2 content="See more in my Github" />
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
    <section
      id="projects"
      className="mt-10 text-center bg-white-400 text-dark-700 mx-[31px] rounded-xl cursor-pointer max-w-[300px] md:max-w-[500px] md:min-w-[300px] md:min-h-[490px] md:max-h-[490px]"
    >
      <Link href={link}>
        <a target="_blank">
          {isDesktop ? (
            <Image
              src={desktop}
              width="625"
              height="324"
              alt="cover image of my project"
            />
          ) : (
            <Image
              src={image}
              width="320"
              height="149"
              alt="cover image of my project"
            />
          )}
        </a>
      </Link>
      <div className="flex text-start mx-4 flex-col">
        <Heading2 content={title} />
        <div className="flex flex-wrap text-8 font-bold">
          {languages.map((language, id) => {
            return (
              <div
                key={language.key}
                className="flex mr-2 mb-2 bg-blue-400 py-1 px-2 rounded-md"
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
    </section>
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
      {isDesktop ? (
        <Image src={icon} alt="language icon" width={20} height={20} />
      ) : (
        <Image src={icon} alt="language icon" width={14} height={14} />
      )}
      <p className="ml-1 md:text-14"> {name} </p>
    </>
  );
};

export default Projects;
