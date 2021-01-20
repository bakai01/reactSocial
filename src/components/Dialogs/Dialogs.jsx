import React from "react";
import style from "./Dialogs.module.css";
import Dialog from "./Dialog";
import Message from "./Message";
import { addNewMessageActionCreator, onChangeMessageTextActionCreator } from "../../redux/state.js";

const Dialogs = (props) => {
    const textOfMessage = React.createRef();

    const addNewMessage = () => {
        props.dispatch(addNewMessageActionCreator());
    };

    const onChangeMessageText = () => {
        let textFromTextare = textOfMessage.current.value;
        props.dispatch(onChangeMessageTextActionCreator(textFromTextare));
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