const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET-USERS'
const SET_TOTAL_COUNT = 'SET_TOTAL_COUNT'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_LOADING = 'SET_LOADING'

const initialState = {
    users: [],
    pageSize: 5,
    totalUserCount: 0,
    currentPage: 1,
    isLoading: false
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
            return {...state, totalUserCount: action.totalCount }
        }

        case SET_CURRENT_PAGE : {
            return {...state, currentPage: action.pageNumber}
        }

        case SET_LOADING: {
            return {
                ...state, isLoading: action.fetching
            }
        }

        default:
            return state
    }
}

export const follow = userId => ( { type: FOLLOW, userId } )

export const unfollow = userId => ( { type: UNFOLLOW, userId } )

export const setUsers = users => ( {type: SET_USERS, users} )

export const setTotalUserCount = totalCount => ( {type: SET_TOTAL_COUNT, totalCount} )

export const setCurrentPage = pageNumber => ( {type: SET_CURRENT_PAGE, pageNumber} )

export const setLoading = fetching => ( {type: SET_LOADING, fetching} )

export default usersPageReducer