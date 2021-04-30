import Users from "./UsersC";
import { connect } from "react-redux";
import { followAC, unfollowAC, setUsersAC, setTotalUserCountAC, setCurrentPageAC } from "../../redux/usersPageReducer";

const mapStateToProps = state => {

    return {
        usersPage: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUserCount: state.usersPage.totalUserCount,
        currentPage: state.usersPage.currentPage
    }
};

const mapDispatchToProps = dispatch => {
    return {
        follow: userId => {
            dispatch(followAC(userId));
        },
        unfollow: userId => {
            dispatch(unfollowAC(userId));
        },
        setUsers: users => {
            dispatch(setUsersAC(users));
        },
        setTotalUserCount: totalCount => {
            dispatch(setTotalUserCountAC(totalCount));
        },
        setCurrentPage: pageNumber => {
            dispatch(setCurrentPageAC(pageNumber));
        }
    };
};

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;