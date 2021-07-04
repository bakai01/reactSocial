import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { useParams } from 'react-router-dom'

import Profile from './Profile'

import { setProfile } from '../../redux/profilePageReducer'

import { ProfileAPI } from '../../api/api'

const ProfileContainer = ({ profile, setProfile }) => {
    let { userId } = useParams()

    if (!userId) userId = 2

    useEffect(() => {
        ProfileAPI
            .getProfile(userId)
            .then(data => setProfile(data))
    }, [userId, setProfile])

    return <Profile profile={profile} />
}

const mapStateToProps = state => ({ profile: state.profilePage.profile })

export default connect(mapStateToProps, { setProfile })(ProfileContainer)
