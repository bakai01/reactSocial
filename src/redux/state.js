import profilePageReducer from "./profilePageReducer";
import dialogsPageReducer from "./dialogsPageReducer";
import sideBarReducer from "./sideBarReducer";

const store = {
    _state: {
        profilePage: {
            listOfAllPosts: [{ id: 0, text: "hello, world", likesCount: 23 }],
            newPostText: ""
        },
        dialogsPage: {
            dialogData: [
                { id: 0, name: "Bakai" },
                { id: 1, name: "Tom" },
                { id: 2, name: "Edvard" },
                { id: 3, name: "Nofear" },
                { id: 4, name: "Bob" }
            ],
            listOfAllMessages: [
                { id: 0, text: "Hi" },
                { id: 1, text: "Kuku" },
                { id: 2, text: "Dubu" }
            ],
            newMessageText: ""
        },
        sideBar: {
            friendList: [
                { id: 0, name: "jake" },
                { id: 1, name: "Cacke" },
                { id: 2, name: "Pops" }
            ]
        }
    },
    
    _callSubscriber() {
        // rerender every change in state
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },
    
    dispatch(action) {
        profilePageReducer(this.getState().profilePage, action);
        dialogsPageReducer(this.getState().dialogsPage, action);
        sideBarReducer(this.getState().sideBar, action);

        this._callSubscriber(this._state);
    }
};

