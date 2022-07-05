import React from "react";

interface headingProps {
  content: string;
}

export const Heading1: React.FC<headingProps> = (props) => {
  const { content } = props;
  return <span className="text-34 mt-10 text-blue-400 font-bold">{content}</span>;
};

export default Heading1;
