import React from 'react';
import * as axios from 'axios';
import { connect } from 'react-redux';

import Users from './Users';

import { follow, unfollow, setUsers, setTotalUserCount, setCurrentPage, setLoading } from '../../redux/usersPageReducer';

class UsersAPI extends React.Component {

    componentDidMount() {
        this.props.setLoading(true);
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=1`)
            .then(({ data }) => {
                this.props.setLoading(false);
                this.props.setUsers(data.items);
                this.props.setTotalUserCount(data.totalCount);
            })
            .catch(response => {
                console.log(response);
                console.log('Error when requesting to the server');
            });
    }

    onChangePage = pageNumber => {
        this.props.setLoading(!this.props.isLoading);
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${pageNumber}`)
            .then(({ data }) => {
                this.props.setLoading(!this.props.isLoading);
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
            isLoading={this.props.isLoading}
        />;
    }
}

const mapStateToProps = state => {
    return {
        usersPage: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUserCount: state.usersPage.totalUserCount,
        currentPage: state.usersPage.currentPage,
        isLoading: state.usersPage.isLoading
    }
};

const UsersContainer = connect(mapStateToProps, {
    follow,
    unfollow,
    setUsers,
    setTotalUserCount,
    setCurrentPage,
    setLoading
})(UsersAPI);

export default UsersContainer;