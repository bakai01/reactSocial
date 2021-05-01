import React from 'react';
import * as axios from 'axios';
import { connect } from 'react-redux';

import Users from './Users';

import { followAC, unfollowAC, setUsersAC, setTotalUserCountAC, setCurrentPageAC } from '../../redux/usersPageReducer';

class UsersAPI extends React.Component {

    componentDidMount() {
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${this.props.currentPage}`)
            .then(({ data }) => {
                this.props.setUsers(data.items);
                this.props.setTotalUserCount(data.totalCount);
            })
            .catch(response => {
                console.log(response);
                console.log('Error when requesting to the server');
            });
    }

    onChangePage = pageNumber => {
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${pageNumber}`)
            .then(({ data }) => {
                this.props.setUsers(data.items);
                this.props.setCurrentPage(pageNumber);
            })
            .catch(() => {
                console.log('Error when changing the page');
            });
    }

    render() {
        return <Users
            onChangePage={this.onChangePage}
            usersPage={this.props.usersPage}
            unfollow={this.props.unfollow}
            follow={this.props.follow}
            totalUserCount={this.props.totalUserCount}
            pageSize={this.props.pageSize}
        />;
    }
}

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

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersAPI);

export default UsersContainer;