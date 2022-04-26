import React from "react";

const UsersOption = ({ userName,id}) => {
  return <option value={userName} id={id}>{userName}</option>;
};

export default UsersOption;
