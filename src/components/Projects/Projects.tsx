import React from "react";
import { projectType } from "../../interface/interface";
import Heading1 from "../Heading/Heading";
import Spacing1 from "../Spacing/Spacing";

interface projectsProps {
  projects: projectType[];
}

const Projects: React.FC<projectsProps> = (props) => {
  const { projects } = props;
  return (
    <Spacing1>
      <>
        <Heading1 content="Projects" />
        {console.log(projects)}
      </>
    </Spacing1>
  );
};

export default Projects;
