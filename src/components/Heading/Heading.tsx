import React from "react";

interface headingProps {
  content: string;
}

interface paragraphProps {
  content: JSX.Element;
}

export const Heading1: React.FC<headingProps> = (props) => {
  const { content } = props;
  return (
    <span className="text-34 mt-10 text-blue-400 font-bold">{content}</span>
  );
};

export const Heading2: React.FC<headingProps> = (props) => {
  const { content } = props;
  return <p className="text-15 my-2 font-semibold"> {content} </p>;
};

export const Heading3: React.FC<headingProps> = (props) => {
  const { content } = props;
  return <p className="text-10 mb-4 font-normal"> {content} </p>;
};

export const Paragraph1: React.FC<paragraphProps> = (props) => {
  const { content } = props;
  return <p className="text-14 my-8 font-semibold text-center"> {content} </p>;
};

export default Heading1;
