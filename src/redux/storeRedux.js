import profilePageReducer from './profilePageReducer'
import dialogsPageReducer from './dialogsPageReducer'
import sideBarReducer from './sideBarReducer'
import { usersPageReducer } from './usersPageReducer'
import { authReducer } from './authReducer'

import { applyMiddleware, combineReducers, createStore } from 'redux'
import reduxMiddleware from 'redux-thunk'

const reducerPack = combineReducers({
    profilePage: profilePageReducer,
    dialogsPage: dialogsPageReducer,
    sideBar: sideBarReducer,
    usersPage: usersPageReducer,
    auth: authReducer
})

const store = createStore(reducerPack, applyMiddleware(reduxMiddleware))

export default store