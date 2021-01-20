import React from "react";

import style from "./Dialogs.module.css";
import Dialog from "./Dialog";
import Message from "./Message";

const Dialogs = (props) => {
    const textOfMessage = React.createRef();

    const addNewMessage = () => {
        const action = { type: "ADD-NEW-MESSAGE" };
        props.dispatch(action);
    };

    const onChangeMessageText = () => {
        const action = { type: "UPDATE-MESSAGE-OF-TEXT", newWordInTextarea:  textOfMessage.current.value };
        props.dispatch(action);
    };

    return (
        <div className = {style.dialogs}>
            <div className = {style.dialogsItems}>
                {
                    props.dialogsPage.dialogData.map( (item) => {
                        return (
                            <Dialog id = {item.id} name = {item.name} />
                        );
                    })
                }
            </div>
            <div className = {style.messages}>
                {
                    props.dialogsPage.listOfAllMessages.map( (item) => {
                        return (
                            <Message id = {item.id} text={item.text} />
                        );
                    })
                }
            </div>
            <div>
                <textarea ref={ textOfMessage } onChange={onChangeMessageText} 
                value={props.dialogsPage.newMessageText} />
                <button onClick={ addNewMessage }>OK</button>
            </div>
        </div>
    );
};

export default Dialogs;