import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import './app.css';

import {
    Header,
    SidebarContainer,
    ProfileContainer,
    News,
    Music,
    Settings,
    DialogsContainer,
    UsersContainer
} from '../../components'

const App = () => {

    return (
        <BrowserRouter>
            <div className='app__wrapper'>
                <Header />
                <SidebarContainer />
                <div className='wrapper__content'>
                    <Route path='/profile/:userId?' render={() => <ProfileContainer />} />
                    <Route path='/dialogs' render={() => <DialogsContainer />} />
                    <Route path='/news' component={News} />
                    <Route path='/music' component={Music} />
                    <Route path='/settings' component={Settings} />
                    <Route path='/users' render={() => <UsersContainer />} />
                </div>
            </div>
        </BrowserRouter>
    )
}

export default App