const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';
const SET_TOTAL_COUNT = 'SET_TOTAL_COUNT';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';

const initialState = {
    users: [],
    pageSize: 5,
    totalUserCount: 0,
    currentPage: 1
};

const usersPageReducer = (usersPageState = initialState, action) => {
    switch (action.type) {
        case SET_USERS: {
            return { ...usersPageState, users: action.users };
        }

        case FOLLOW: {
            return {
                ...usersPageState,
                users: usersPageState.users.map(item => {
                    if (item.id === action.userId) {
                        return {
                            ...item,
                            followed: true
                        }
                    }

                    return item;
                })
            };
        }

        case UNFOLLOW: {
            return {
                ...usersPageState,
                users: usersPageState.users.map(item => {
                    if (item.id === action.userId) {
                        return {
                            ...item,
                            followed: false
                        }
                    }

                    return item;
                })
            };
        }

        case SET_TOTAL_COUNT: {
            return {...usersPageState, totalUserCount: action.totalCount };
        }

        case SET_CURRENT_PAGE : {
            return {...usersPageState, currentPage: action.pageNumber};
        }

        default:
            return usersPageState;
    }
};

export const followAC = userId => ( { type: FOLLOW, userId } );

export const unfollowAC = userId => ( { type: UNFOLLOW, userId } );

export const setUsersAC = users => ( {type: SET_USERS, users} );

export const setTotalUserCountAC = totalCount => ( {type: SET_TOTAL_COUNT, totalCount} );

export const setCurrentPageAC = pageNumber => ( {type: SET_CURRENT_PAGE, pageNumber} );

export default usersPageReducer;