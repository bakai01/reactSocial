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
    _getLastMessageId() {
        let messageList = this._state.dialogsPage.listOfAllMessages;
        let i = messageList[messageList.length - 1].id;
        return ++i;
    },
    _getLastPostId() {
        let postList = this._state.profilePage.listOfAllPosts;
        let i = postList[postList.length - 1].id;
        return ++i;
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {
        if (action.type === "UPDATE-MESSAGE-OF-TEXT") {
            this._state.dialogsPage.newMessageText = action.newWordInTextarea;
            this._callSubscriber(this._state);
        }

        else if (action.type === "UPDATE-POST-OF-TEXT") {
            this._state.profilePage.newPostText = action.newWordInTextarea;
            this._callSubscriber(this._state);
        }

        else if (action.type === "ADD-NEW-MESSAGE") {
            debugger;
            const newMessage = {
                id: this._getLastMessageId(),
                text: this._state.dialogsPage.newMessageText
            };
    
            this._state.dialogsPage.listOfAllMessages.push(newMessage);
            this._state.dialogsPage.newMessageText = "";
            this._callSubscriber(this._state);
        }

        else if (action.type === "ADD-NEW-POST") {
            const newPost = {
                id: this._getLastPostId(),
                text: this._state.profilePage.newPostText,
                likesCount: 0
            };
    
            this._state.profilePage.listOfAllPosts.push(newPost);
            this._state.profilePage.newPostText = "";
            this._callSubscriber(this._state);
        }
    }
};

export default store;