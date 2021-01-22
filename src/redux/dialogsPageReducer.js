const ADD_NEW_MESSAGE = "ADD-NEW-MESSAGE";
const UPDATE_MESSAGE_OF_TEXT = "UPDATE-MESSAGE-OF-TEXT";

const dialogsPageReducer = (dialogsPageState, action) => {
    const getLastMessageId = () => {
        let messageList = dialogsPageState.listOfAllMessages;
        let i = messageList[messageList.length - 1].id;
        return ++i;
    };

    switch (action.type) {
        case ADD_NEW_MESSAGE:
            const newMessage = {
                id: getLastMessageId(),
                text: dialogsPageState.newMessageText
            };
    
            dialogsPageState.listOfAllMessages.push(newMessage);
            dialogsPageState.newMessageText = "";
            return dialogsPageState;

        case UPDATE_MESSAGE_OF_TEXT:
            dialogsPageState.newMessageText = action.newWordInTextarea;
            return dialogsPageState;

        default:
            return dialogsPageState;
    }
};

export const addNewMessageActionCreator = () => ({ type: ADD_NEW_MESSAGE });

export const onChangeMessageTextActionCreator = (textOfMessage) => (
    { type: UPDATE_MESSAGE_OF_TEXT, newWordInTextarea:  textOfMessage }
);

export default dialogsPageReducer;