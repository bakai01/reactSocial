import React from "react";

import style from "./Dialogs.module.css";
import Dialog from "./Dialog";
import Message from "./Message";

const Dialogs = (props) => {
    const textOfMessage = React.createRef();

    const addNewMessage = () => {
        props.addMessage(textOfMessage.current.value);
    };

    const onChangeMessageText = () => {
        props.updateMessageOfText(textOfMessage.current.value);
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
                    props.dialogsPage.messageData.map( (item) => {
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