import React from "react";
import Sidebar from "./Sidebar";

const SidebarContainer = (props) => {
  return (
    <Sidebar state={props.store.getState().sideBar}/>
  );
}

export default SidebarContainer;