import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import './app.css'

import {
    HeaderContainer,
    SidebarContainer,
    ProfileContainer,
    News,
    Music,
    Settings,
    DialogsContainer,
    UsersContainer,
    Login
} from '../../components'

const App = () => (
    <BrowserRouter>
        <div className='app__wrapper'>
            <HeaderContainer />
            <SidebarContainer />
            <div className='wrapper__content'>
                <Route path='/profile/:userId?' render={() => <ProfileContainer />} />
                <Route path='/dialogs' render={() => <DialogsContainer />} />
                <Route path='/news' component={News} />
                <Route path='/music' component={Music} />
                <Route path='/settings' component={Settings} />
                <Route path='/users' render={() => <UsersContainer />} />
                <Route path='/login' render={() => <Login />} />
            </div>
        </div>
    </BrowserRouter>
)

export { App }