import React, { useEffect } from 'react'
import * as axios from 'axios'
import { connect } from 'react-redux'

import Header from './Header'

import { setAuthorizedUser } from '../../redux/authReducer'

const HeaderContainer = ({ setAuthorizedUser, login, isAuthorized }) => {
    useEffect(() => {
        axios
            .get('https://social-network.samuraijs.com/api/1.0/auth/me', {
                withCredentials: true
            })
            .then(response => setAuthorizedUser(response.data.data))
    }, [setAuthorizedUser])

    return <Header login={login} isAuthorized={isAuthorized} />
}

const mapStateToProps = state => ({
    login: state.auth.login,
    isAuthorized: state.auth.isAuthorized
})

export default connect(mapStateToProps, { setAuthorizedUser })(HeaderContainer)