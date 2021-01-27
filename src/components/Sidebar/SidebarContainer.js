import React from "react";
import myContext from "../../Context";
import Sidebar from "./Sidebar";

const SidebarContainer = () => {
    return (
        <myContext.Consumer>
            {
                store => <Sidebar state={store.getState().sideBar} />
            }
        </myContext.Consumer>
    );
}

export default SidebarContainer;