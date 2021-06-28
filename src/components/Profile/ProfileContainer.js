import React from 'react'
import * as axios from 'axios'
import { connect } from 'react-redux'

import Profile from './Profile'

import { setProfile } from '../../redux/profilePageReducer'

class ProfileContainer extends React.Component {

    componentDidMount() {
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
            .then(({ data }) => this.props.setProfile(data))
    }

    render() {
        return <Profile profile={this.props.profile} />
    }
}

const mapStateToProps = state => ({
    profile: state.profilePage.profile
})

export default connect(mapStateToProps, { setProfile })(ProfileContainer)