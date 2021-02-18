const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET-USERS";

const initialState = {
    users: [
        {
            id: 0, 
            avatar: "https://s01.riotpixels.net/data/64/ec/64ec7e97-acb4-4acd-8879-91d0cdbbccc6.png.240p.jpg",
            followed: true, fullName: "Dmitry", status: "I am looking spicy", 
            location: { country: "Belarus", city: "Minsk" }
        },
        {
            id: 1, 
            avatar: "https://s01.riotpixels.net/data/64/ec/64ec7e97-acb4-4acd-8879-91d0cdbbccc6.png.240p.jpg",
            followed: false, fullName: "Sveta", status: "I am hot", 
            location: { country: "Russia", city: "Moscow" }
        },
        {
            id: 2, 
            avatar: "https://s01.riotpixels.net/data/64/ec/64ec7e97-acb4-4acd-8879-91d0cdbbccc6.png.240p.jpg",
            followed: false, fullName: "Maria", status: "<3", 
            location: { country: "Colombia", city: "Bogota" }
        }
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
