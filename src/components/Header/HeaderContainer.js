import React, { useEffect } from 'react'
import { connect } from 'react-redux'

import Header from './Header'

import { setAuthorizedUser } from '../../redux/authReducer'

import { HeaderAPI } from '../../api/api'

const HeaderContainer = ({ setAuthorizedUser, login, isAuthorized }) => {
    useEffect(() => {
        HeaderAPI
            .AuthMe()
            .then(data => setAuthorizedUser(data))
    }, [setAuthorizedUser])

    return <Header login={login} isAuthorized={isAuthorized} />
}

const mapStateToProps = state => ({
    login: state.auth.login,
    isAuthorized: state.auth.isAuthorized
})

export default connect(mapStateToProps, { setAuthorizedUser })(HeaderContainer)