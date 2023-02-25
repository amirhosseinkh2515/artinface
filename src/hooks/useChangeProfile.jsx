import React from "react";
import { ChangeUserProviderContext } from "../providers/userProvider";

function UseChangeProfile() {
  return React.useContext(ChangeUserProviderContext);
}

export default UseChangeProfile;
