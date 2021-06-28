import React, { useEffect } from 'react'
import * as axios from 'axios'
import { connect } from 'react-redux'

import Profile from './Profile'

import { setProfile } from '../../redux/profilePageReducer'
import { useLocation } from 'react-router'

const ProfileContainer = ({ profile, setProfile }) => {
    const location = useLocation();

    useEffect(() => {
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/${location.pathname}`)
            .then(({ data }) => setProfile(data))
    }, [location.pathname, setProfile])

    return <Profile profile={profile} />
}

const mapStateToProps = state => ({ profile: state.profilePage.profile })

export default connect(mapStateToProps, { setProfile })(ProfileContainer)