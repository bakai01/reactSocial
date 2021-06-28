import React, { useEffect } from 'react'
import * as axios from 'axios'
import { connect } from 'react-redux'

import Profile from './Profile'

import { setProfile } from '../../redux/profilePageReducer'
import { useParams } from 'react-router-dom'

const ProfileContainer = ({ profile, setProfile }) => {
    let { userId } = useParams()

    if (!userId) userId = 4

    useEffect(() => {
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
            .then(({ data }) => setProfile(data))
    }, [userId, setProfile])

    return <Profile profile={profile} />
}

const mapStateToProps = state => ({ profile: state.profilePage.profile })

export default connect(mapStateToProps, { setProfile })(ProfileContainer)
