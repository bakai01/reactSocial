const initialState = {
    friendList: [
        { id: 0, name: 'jake' },
        { id: 1, name: 'Cacke' },
        { id: 2, name: 'Pops' }
    ]
};

const sideBarReducer = (sideBarState = initialState, action) => {
    return sideBarState;
};

export default sideBarReducer;