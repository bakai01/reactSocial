import { UsersAPI } from "../api/api"

const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET-USERS'
const SET_TOTAL_COUNT = 'SET_TOTAL_COUNT'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_LOADING = 'SET_LOADING'
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS'

const initialState = {
    users: [],
    pageSize: 5,
    totalUserCount: 0,
    currentPage: 1,
    isLoading: false,
    followingInProgress: []
}

const usersPageReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USERS: {
            return { ...state, users: action.users }
        }

        case FOLLOW: {
            return {
                ...state,
                users: state.users.map(item => {
                    if (item.id === action.userId) {
                        return {
                            ...item,
                            followed: true
                        }
                    }

                    return item
                })
            }
        }

        case UNFOLLOW: {
            return {
                ...state,
                users: state.users.map(item => {
                    if (item.id === action.userId) {
                        return {
                            ...item,
                            followed: false
                        }
                    }

                    return item
                })
            }
        }

        case SET_TOTAL_COUNT: {
            return { ...state, totalUserCount: action.totalCount }
        }

        case SET_CURRENT_PAGE: {
            return { ...state, currentPage: action.pageNumber }
        }

        case SET_LOADING: {
            return {
                ...state, isLoading: action.fetching
            }
        }

        case TOGGLE_IS_FOLLOWING_PROGRESS: {
            return {
                ...state,
                followingInProgress: action.fetching
                    ? [...state.followingInProgress, action.id]
                    : state.followingInProgress.filter(id => id !== action.id)
            }
        }

        default:
            return state
    }
}

// action creators
export const followSuccess = userId => ({ type: FOLLOW, userId })
export const unfollowSuccess = userId => ({ type: UNFOLLOW, userId })
export const setUsers = users => ({ type: SET_USERS, users })
export const setTotalUserCount = totalCount => ({ type: SET_TOTAL_COUNT, totalCount })
export const setCurrentPage = pageNumber => ({ type: SET_CURRENT_PAGE, pageNumber })
export const setLoading = fetching => ({ type: SET_LOADING, fetching })
export const toggleFoollowingProgress = (fetching, id) => ({ type: TOGGLE_IS_FOLLOWING_PROGRESS, fetching, id })

// thunks
export const getUsers = (pageNumber, pageSize) => {
    return dispatch => {
        dispatch(setLoading(true))
        UsersAPI
            .getUsers(pageNumber, pageSize)
            .then(data => {
                dispatch(setLoading(false))
                dispatch(setUsers(data.items))
                dispatch(setTotalUserCount(data.totalCount))
            })
            .catch(response => {
                console.log(response)
                console.log('Error when requesting to the server')
            })
    }
}

export const unfollow = userId => {
    return dispatch => {
        dispatch(toggleFoollowingProgress(true, userId))
        UsersAPI
            .unfollow(userId)
            .then(data => {
                if (data.resultCode === 0) dispatch(unfollowSuccess(userId))
                dispatch(toggleFoollowingProgress(false, userId))
            })
    }
}

export const follow = userId => {
    return dispatch => {
        dispatch(toggleFoollowingProgress(true, userId))
        UsersAPI
            .follow(userId)
            .then(data => {
                if (data.resultCode === 0) dispatch(followSuccess(userId))
                dispatch(toggleFoollowingProgress(false, userId))
            })
    }
}

export { usersPageReducer }