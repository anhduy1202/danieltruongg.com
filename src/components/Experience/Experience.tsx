import React from "react";
import { experienceType } from "../../interface/interface";
import Heading1 from "../Heading/Heading";
import { Spacing2 } from "../Spacing/Spacing";

interface expProps {
  experiences: experienceType[];
}

const Experience: React.FC<expProps> = (props) => {
  const { experiences } = props;
  console.log(experiences);
  return (
    <Spacing2>
      <Heading1 content="Experience" />
    </Spacing2>
  );
};

export default Experience;
