import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { useParams, Redirect } from 'react-router-dom'

import Profile from './Profile'

import { getProfile } from '../../redux/profilePageReducer'

const ProfileContainer = ({ getProfile, profile, isAuth }) => {
    let { userId } = useParams()

    if (!userId) userId = 2

    useEffect(() => {
        getProfile(userId)
    }, [getProfile, userId])

    if (!isAuth) return <Redirect to='/login' />

    return <Profile profile={profile} />
}

const mapStateToProps = state => ({ profile: state.profilePage.profile, isAuth: state.auth.isAuthorized })

export default connect(mapStateToProps, { getProfile })(ProfileContainer)
