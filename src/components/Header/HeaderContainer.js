import React, { useEffect } from 'react'
import { connect } from 'react-redux'

import Header from './Header'

import { authMe } from '../../redux/authReducer'

const HeaderContainer = ({ authMe, login, isAuthorized }) => {
    useEffect(() => {
        authMe()
    }, [authMe])

    return <Header login={login} isAuthorized={isAuthorized} />
}

const mapStateToProps = state => ({
    login: state.auth.login,
    isAuthorized: state.auth.isAuthorized
})

export default connect(mapStateToProps, { authMe })(HeaderContainer)