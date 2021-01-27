import React from "react";
import myContext from "../../Context";
import { addNewMessageActionCreator, onChangeMessageTextActionCreator } from 
"../../redux/dialogsPageReducer";
import Dialogs from "./Dialogs";

const DialogsContainer = () => {
    
    return (        
        <myContext.Consumer>
            {
                store => {
                    const onAddNewMessage = () => {
                        const action = addNewMessageActionCreator();
                        store.dispatch(action);
                    };
                
                    const onChangeMessageText = (text) => {
                        const action = onChangeMessageTextActionCreator(text);
                        store.dispatch(action);
                    };

                    return (
                        <Dialogs dialogsPage={store.getState().dialogsPage}
                            addNewMessage={onAddNewMessage}
                            changeMessageText={onChangeMessageText}
                        />
                    );
                }
            }
        </myContext.Consumer>
    );
};

export default DialogsContainer;