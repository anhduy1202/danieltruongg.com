import React from "react";

type Spacing1Props = {
  children?: React.ReactNode;
};

const Spacing1: React.FC<Spacing1Props> = (props) => {
  const { children } = props;
  return <div className="border-t-[2px] border-white-700 mt-48 flex justify-center">{children}</div>;
};

export default Spacing1;
