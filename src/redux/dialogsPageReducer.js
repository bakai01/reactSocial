const ADD_NEW_MESSAGE = "ADD-NEW-MESSAGE";
const UPDATE_MESSAGE_OF_TEXT = "UPDATE-MESSAGE-OF-TEXT";

const initialState = {
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
};

const dialogsPageReducer = (dialogsPageState = initialState, action) => {
    const getLastMessageId = () => {
        let messageList = dialogsPageState.listOfAllMessages;
        let i = messageList[messageList.length - 1].id;
        return ++i;
    };

    switch (action.type) {
        case ADD_NEW_MESSAGE: {
            const newMessage = {
                id: getLastMessageId(),
                text: dialogsPageState.newMessageText
            };
            
            let stateCopy = {...dialogsPageState};
            stateCopy.listOfAllMessages = [...dialogsPageState.listOfAllMessages];

            stateCopy.listOfAllMessages.push(newMessage);
            stateCopy.newMessageText = "";
            return stateCopy;
        }
            

        case UPDATE_MESSAGE_OF_TEXT: {
            let stateCopy = {...dialogsPageState};

            stateCopy.newMessageText = action.newWordInTextarea;
            return stateCopy;
        }

        default:
            return dialogsPageState;
    }
};

export const addNewMessageActionCreator = () => ({ type: ADD_NEW_MESSAGE });

export const onChangeMessageTextActionCreator = (textOfMessage) => (
    { type: UPDATE_MESSAGE_OF_TEXT, newWordInTextarea:  textOfMessage }
);

export default dialogsPageReducer;