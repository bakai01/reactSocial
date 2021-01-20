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
    getState() {
        return this._state;
    },
    _callSubscriber() {
        // rerender every change in state
    },
    getLastMessageId() {
        let messageList = this._state.dialogsPage.listOfAllMessages;
        let i = messageList[messageList.length - 1].id;
        return ++i;
    },
    getLastPostId() {
        let postList = this._state.profilePage.listOfAllPosts;
        let i = postList[postList.length - 1].id;
        return ++i;
    },
    addMessage(message) {
        const newMessage = {
            id: this.getLastMessageId(),
            text: message
        };
debugger;
        this._state.dialogsPage.listOfAllMessages.push(newMessage);
        this._state.dialogsPage.newMessageText = "";
        this._callSubscriber(this._state);
    },
    addPost(textOfPost) {
        const newPost = {
            id: this.getLastPostId(),
            text: textOfPost,
            likesCount: 0
        };
debugger;   
        this._state.profilePage.listOfAllPosts.push(newPost);
        this._state.profilePage.newPostText = "";
        this._callSubscriber(this._state);
    },
    updatePostOfText(newWordInTextarea) {
        this._state.profilePage.newPostText = newWordInTextarea;
        this._callSubscriber(this._state);
    },
    updateMessageOfText(newWordInTextarea) {
        this._state.dialogsPage.newMessageText = newWordInTextarea;
        this._callSubscriber(this._state);
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    }
};

export default store;