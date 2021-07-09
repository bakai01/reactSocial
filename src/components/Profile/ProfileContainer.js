import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { useParams } from 'react-router-dom'

import Profile from './Profile'

import { getProfile } from '../../redux/profilePageReducer'

const ProfileContainer = ({ getProfile, profile }) => {
    let { userId } = useParams()

    if (!userId) userId = 2

    useEffect(() => {
        getProfile(userId)
    }, [getProfile, userId])

    return <Profile profile={profile} />
}

const mapStateToProps = state => ({ profile: state.profilePage.profile })

export default connect(mapStateToProps, { getProfile })(ProfileContainer)
