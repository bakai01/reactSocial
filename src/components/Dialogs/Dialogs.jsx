import React from "react";
import style from "./Dialogs.module.css";
import Dialog from "./Dialog";
import Message from "./Message";
import { addNewMessageActionCreator, onChangeMessageTextActionCreator } from 
"../../redux/dialogsPageReducer";

const Dialogs = (props) => {

    const addNewMessage = () => {
        props.dispatch(addNewMessageActionCreator());
    };

    const onChangeMessageText = (event) => {
        let textFromTextare = event.target.value;
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
            <div>
                <div className = {style.messages}>
                    {
                        props.dialogsPage.listOfAllMessages.map((item) => {
                            return (
                                <Message id={item.id} text={item.text} />
                            );
                        })
                    }
                </div>
                <div>
                    <textarea className={style.textArea} 
                        onChange={onChangeMessageText} value={props.dialogsPage.newMessageText} />
                    <div className={style.btn__wrapper}>
                        <button className={style.btn} onClick={addNewMessage}>Send</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dialogs;