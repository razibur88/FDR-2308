import React from "react";

const Flex = ({ className, children }) => {
  return <div className={`flex ${className} flex-wrap`}>{children}</div>;
};

export default Flex;
