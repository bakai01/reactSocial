import { applyMiddleware, combineReducers, createStore } from 'redux'
import thunkMiddleware from 'redux-thunk'

import profilePageReducer from './profilePageReducer'
import dialogsPageReducer from './dialogsPageReducer'
import sideBarReducer from './sideBarReducer'
import { usersPageReducer } from './usersPageReducer'
import { authReducer } from './authReducer'

const reducerPack = combineReducers({
    profilePage: profilePageReducer,
    dialogsPage: dialogsPageReducer,
    sideBar: sideBarReducer,
    usersPage: usersPageReducer,
    auth: authReducer
})

const store = createStore(reducerPack, applyMiddleware(thunkMiddleware))

export default store