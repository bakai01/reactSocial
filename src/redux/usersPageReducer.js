const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET-USERS";

const initialState = {
    users: [
        
    ]
};

const usersPageReducer = (usersPageState = initialState, action) => {
    switch (action.type) {
        case SET_USERS:
            return { ...usersPageState, users: [...usersPageState.users, ...action.users] };

        case FOLLOW:
            return {
                ...usersPageState,
                users: usersPageState.users.map( item => {
                    if (item.id === action.userId) {
                        return {
                            ...item,
                            followed: true
                        }
                    }

                    return item;
                })
            };

        case UNFOLLOW:
            return {
                ...usersPageState,
                users: usersPageState.users.map( item => {
                    if (item.id === action.userId) {
                        return {
                            ...item,
                            followed: false
                        }
                    }

                    return item;
                })
            };

        default:
            return usersPageState;
    }    
};

export const followAC = (userId) => ( { type: FOLLOW, userId } );

export const unfollowAC = (userId) => ( { type: UNFOLLOW, userId } );

export const setUsersAC = (users) => ( {type: SET_USERS, users} );

export default usersPageReducer;
