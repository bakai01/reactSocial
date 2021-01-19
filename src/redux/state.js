let renderEntireTree = () => {

};

const state = {
    profilePage: {
        postsData: [{ id: 0, text: "hello, world", likesCount: 23 }],
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
        messageData: [
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

};

const iForIdOfMessage = () => {
    let messageData = state.dialogsPage.messageData;
    let i = messageData[messageData.length - 1].id;
    return ++i;
};

export const addMessage = (message) => {
    const newMessage = {
        id: iForIdOfMessage(),
        text: message
    };

    state.dialogsPage.messageData.push(newMessage);
    state.dialogsPage.newMessageText = "";
    renderEntireTree(state);
};

const iForIdOfPost = () => {
    let postsData = state.profilePage.postsData;
    let i = postsData[postsData.length - 1].id;
    return ++i;

};

export const addPost = (textOfPost) => {
    const newPost = {
        id: iForIdOfPost(),
        text: textOfPost,
        likesCount: 0
    };

    state.profilePage.postsData.push(newPost);
    state.profilePage.newPostText = "";
    renderEntireTree(state);
};

export const updatePostOfText = (textOfPost) => {
    state.profilePage.newPostText = textOfPost;
    renderEntireTree(state);
};

export const updateMessageOfText = (textOfMessage) => {
    state.dialogsPage.newMessageText = textOfMessage;
    renderEntireTree(state);
};

export const subscribe = (observer) => {
    renderEntireTree = observer;
    console.log("asdasd");
};

window.state = state;

export default state;