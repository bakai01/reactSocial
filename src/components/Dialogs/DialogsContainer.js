import { addNewMessageActionCreator, onChangeMessageTextActionCreator } from
    '../../redux/dialogsPageReducer'
import Dialogs from './Dialogs'
import { connect } from 'react-redux'

const mapStateToProps = state => {
    return {
        dialogsPage: state.dialogsPage
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addNewMessage: () => {
            const action = addNewMessageActionCreator()
            dispatch(action)
        },
        changeMessageText: (text) => {
            const action = onChangeMessageTextActionCreator(text)
            dispatch(action)
        }
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

export default DialogsContainer