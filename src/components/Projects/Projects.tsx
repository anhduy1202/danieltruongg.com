import Image from "next/image";
import Link from "next/link";
import React from "react";
import { languageType, projectType } from "../../interface/interface";
import { Heading1, Heading2, Heading3 } from "../Heading/Heading";
import { Spacing1 } from "../Spacing/Spacing";

interface projectsProps {
  projects: projectType[];
}

const Projects: React.FC<projectsProps> = (props) => {
  const { projects } = props;
  return (
    <Spacing1>
      <>
        <Heading1 content="Projects" />
        {projects.map((project) => {
          return (
            <div key={project.id}>
              <Project
                link={project.link}
                image={project.thumbnail}
                title={project.title}
                languages={project.languages}
                description={project.description}
              />
            </div>
          );
        })}
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
  link: string;
  title: string;
  languages: languageType[];
  description: string;
}

const Project: React.FC<projectProps> = (props) => {
  const { image, link, title, languages, description } = props;
  return (
    <section id="projects" className="mt-10 text-center bg-white-400 text-dark-700 mx-[31px] rounded-xl cursor-pointer">
      <Link href={link}>
        <a target="_blank">
          <Image
            src={image}
            width="281"
            height="149"
            alt="cover image of my project"
          />
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
                <Language name={language.name} icon={language.icon} />
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
}

const Language: React.FC<languageProps> = (props) => {
  const { name, icon } = props;
  return (
    <>
      <Image src={icon} alt="language icon" width={14} height={14} />
      <p className="ml-1"> {name} </p>
    </>
  );
};

export default Projects;
