import Users from "./UsersC";
import { connect } from "react-redux";
import { followAC, unfollowAC, setUsersAC } from "../../redux/usersPageReducer";

const mapStateToProps = state => {

    return {
        usersPage: state.usersPage
    }
};

const mapDispatchToProps = dispatch => {
    return {
        follow: (userId) => {
            dispatch(followAC(userId));
        },
        unfollow: (userId) => {
            dispatch(unfollowAC(userId));
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users));
        }
    };
};

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;