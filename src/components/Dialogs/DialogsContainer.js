import React from "react";
import myContext from "../../Context";
import { addNewMessageActionCreator, onChangeMessageTextActionCreator } from 
"../../redux/dialogsPageReducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";

// const DialogsContainer = () => {
    
//     return (        
//         <myContext.Consumer>
//             {
//                 store => {
//                     const onAddNewMessage = () => {
//                         const action = addNewMessageActionCreator();
//                         store.dispatch(action);
//                     };
                
//                     const onChangeMessageText = (text) => {
//                         const action = onChangeMessageTextActionCreator(text);
//                         store.dispatch(action);
//                     };

//                     return (
//                         <Dialogs dialogsPage={store.getState().dialogsPage}
//                             addNewMessage={onAddNewMessage}
//                             changeMessageText={onChangeMessageText}
//                         />
//                     );
//                 }
//             }
//         </myContext.Consumer>
//     );
// };

const mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        addNewMessage: () => {
            const action = addNewMessageActionCreator();
            dispatch(action);
        },
        changeMessageText: (text) => {
            const action = onChangeMessageTextActionCreator(text);
            dispatch(action);
        }
    };
};

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;