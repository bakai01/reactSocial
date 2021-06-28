import profilePageReducer from './profilePageReducer';
import dialogsPageReducer from './dialogsPageReducer';
import sideBarReducer from './sideBarReducer';
import usersPageReducer from './usersPageReducer';

import { combineReducers, createStore } from 'redux';

const reducerPack = combineReducers({
    profilePage: profilePageReducer,
    dialogsPage: dialogsPageReducer,
    sideBar: sideBarReducer,
    usersPage: usersPageReducer
});

const store = createStore(reducerPack);

export default store;