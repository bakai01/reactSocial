import React from 'react'
import { Redirect } from 'react-router'

import style from './Dialogs.module.css'

import Dialog from './Dialog'
import Message from './Message'

const Dialogs = ({ addNewMessage, changeMessageText, dialogsPage, isAuth }) => {

    if (!isAuth) return <Redirect to='/login' />

    const onAddNewMessage = () => {
        addNewMessage()
    }

    const onChangeMessageText = (event) => {
        let textFromTextare = event.target.value
        changeMessageText(textFromTextare)
    }

    return (
        <div className={style.dialogs}>
            <div className={style.dialogsItems}>
                {
                    dialogsPage.dialogData.map((item) => {
                        return (
                            <Dialog key={item.id} id={item.id} name={item.name} />
                        )
                    })
                }
            </div>
            <div className={style.right__side}>
                <div className={style.messages}>
                    {
                        dialogsPage.listOfAllMessages.map((item) => {
                            return (
                                <Message key={item.id} text={item.text} />
                            )
                        })
                    }
                </div>

                <div>
                    <textarea
                        className={style.textArea}
                        onChange={onChangeMessageText}
                        value={dialogsPage.newMessageText}
                    />
                    <div className={style.btn__wrapper}>
                        <button className={style.btn} onClick={onAddNewMessage}>Send</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export { Dialogs }