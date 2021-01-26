import React from "react";
import { addNewMessageActionCreator, onChangeMessageTextActionCreator } from 
"../../redux/dialogsPageReducer";
import Dialogs from "./Dialogs";

const DialogsContainer = (props) => {

    const onAddNewMessage = () => {
        const action = addNewMessageActionCreator();
        props.store.dispatch(action);
    };

    const onChangeMessageText = (text) => {
        const action = onChangeMessageTextActionCreator(text);
        props.store.dispatch(action);
    };

    return (
        <Dialogs dialogsPage={props.store.getState().dialogsPage}
            addNewMessage={onAddNewMessage}
            changeMessageText={onChangeMessageText} />
    );
};

export default DialogsContainer;