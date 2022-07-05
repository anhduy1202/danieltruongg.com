import Image from "next/image";
import Link from "next/link";
import React from "react";
import { languageType, projectType } from "../../interface/interface";
import { Heading1 } from "../Heading/Heading";
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
    <section className="mt-10 text-center bg-white-400 text-dark-700 mx-[31px] rounded-xl cursor-pointer">
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
      <p> {title} </p>
      <p> {description} </p>
    </section>
  );
};

export default Projects;
