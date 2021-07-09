import { ProfileAPI } from '../api/api'

const ADD_NEW_POST = 'ADD-NEW-POST'
const UPDATE_POST_OF_TEXT = 'UPDATE-POST-OF-TEXT'
const SET_PROFILE = 'SET_PROFILE'

const initialState = {
    profile: null,
    listOfAllPosts: [{ id: 0, text: 'hello, world', likesCount: 23 }],
    newPostText: ''
}

const profilePageReducer = (state = initialState, action) => {
    const getLastPostId = () => {
        let postList = state.listOfAllPosts
        let i = postList[postList.length - 1].id
        return ++i
    }

    switch (action.type) {
        case ADD_NEW_POST: {
            if (state.newPostText) {
                const newPost = {
                    id: getLastPostId(),
                    text: state.newPostText,
                    likesCount: 0
                }

                return {
                    ...state,
                    listOfAllPosts: [...state.listOfAllPosts, newPost],
                    newPostText: ''
                }
            }

            else {
                alert('Введите данные!!!');
                return state;
            }
        }

        case UPDATE_POST_OF_TEXT: {
            return {
                ...state,
                newPostText: action.newWordInTextarea
            }
        }

        case SET_PROFILE: {
            return {
                ...state,
                profile: action.payload
            }
        }

        default:
            return state
    }
}

// action creators
export const addPostActionCreator = () => ({ type: ADD_NEW_POST })
export const updatePostOfTextActionCreator = textOfPost => ({ type: UPDATE_POST_OF_TEXT, newWordInTextarea: textOfPost })
export const setProfile = profile => ({type: SET_PROFILE, payload: profile})

// thunks
export const getProfile = userId => dispatch => {
    ProfileAPI
        .getProfile(userId)
        .then(data => dispatch(setProfile(data)))
}


export default profilePageReducer