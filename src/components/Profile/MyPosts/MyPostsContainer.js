import { addPostActionCreator, updatePostOfTextActionCreator } from '../../../redux/profilePageReducer';
import MyPosts from './MyPosts';
import {connect} from 'react-redux';

const mapStateToProps = state => {
    return {
        profilePage: state.profilePage
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onAddPost: () => {
            const action = addPostActionCreator();
            dispatch(action);
        },
        updatePostOfText: (text) => {
            const action = updatePostOfTextActionCreator(text)
            dispatch(action);
        }
    };
};

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;