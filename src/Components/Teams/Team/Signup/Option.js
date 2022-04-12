import React from "react";

const Option = ({ teamName,id}) => {
  return <option value={teamName} id={id}>{teamName}</option>;
};

export default Option;
