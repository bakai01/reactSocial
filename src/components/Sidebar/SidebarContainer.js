import Sidebar from "./Sidebar";
import {connect} from "react-redux";

// const SidebarContainer = () => {
//     return (
//         <myContext.Consumer>
//             {
//                 store => <Sidebar state={store.getState().sideBar} />
//             }
//         </myContext.Consumer>
//     );
// };

const mapStateToProps = (state) => {
    return {
        state: state.sideBar
    };
};

const mapDispatchToProps = (dispatch) => {
    return {};
};

const SidebarContainer = connect(mapStateToProps, mapDispatchToProps)(Sidebar);

export default SidebarContainer;