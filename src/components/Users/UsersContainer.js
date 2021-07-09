import React from 'react'
import { connect } from 'react-redux'

import { Users } from './Users'

import {
    follow,
    unfollow,
    getUsers
} from '../../redux/usersPageReducer'

class UsersClassComponent extends React.Component {

    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
    }

    onChangePage = pageNumber => {
        this.props.getUsers(pageNumber, this.props.pageSize)
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
            followingInProgress={this.props.followingInProgress}
            toggleFoollowingProgress={this.props.toggleFoollowingProgress}
        />
    }
}

const mapStateToProps = state => {
    return {
        usersPage: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUserCount: state.usersPage.totalUserCount,
        currentPage: state.usersPage.currentPage,
        isLoading: state.usersPage.isLoading,
        followingInProgress: state.usersPage.followingInProgress
    }
}

const UsersContainer = connect(mapStateToProps, {
    follow,
    unfollow,
    getUsers
})(UsersClassComponent)

export { UsersContainer }