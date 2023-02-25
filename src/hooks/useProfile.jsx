import React from "react";
import { UserProviderContext } from "../providers/userProvider";

function UseProfile() {
  return React.useContext(UserProviderContext);
}

export default UseProfile;
