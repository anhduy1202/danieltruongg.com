import React from "react";

interface headingProps {
  content: string;
}

interface paragraphProps {
  content: JSX.Element | string;
}

export const Heading1: React.FC<headingProps> = (props) => {
  const { content } = props;
  return (
    <span className="text-34 mt-10 text-blue-400 font-bold md:text-42">{content}</span>
  );
};

export const Heading2: React.FC<headingProps> = (props) => {
  const { content } = props;
  return <p className="text-15 my-2 font-semibold text-center md:text-20 md:text-start"> {content} </p>;
};

export const Heading3: React.FC<headingProps> = (props) => {
  const { content } = props;
  return <p className="text-10 mb-8 font-normal md:text-16"> {content} </p>;
};

export const Paragraph1: React.FC<paragraphProps> = (props) => {
  const { content } = props;
  return <p className="text-14 my-8 font-semibold text-center md:text-start md:text-16"> {content} </p>;
};

export const Paragraph0: React.FC<paragraphProps> = (props) => {
  const { content } = props;
  return <p className="text-16 mt-8 font-semibold text-start md:mt-0 md:text-20"> {content} </p>;
};

export const Paragraph2: React.FC<paragraphProps> = (props) => {
  const { content } = props;
  return <p className="text-14 mt-4 text-white-600 font-semibold text-start md:text-16"> {content} </p>;
};

export const Paragraph3: React.FC<paragraphProps> = (props) => {
  const { content } = props;
  return <p className="text-12 mt-2 text-white-600 text-start md:text-14"> {content} </p>;
};

export default Heading1;
