import { addPostActionCreator, updatePostOfTextActionCreator } from "../../../redux/profilePageReducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";

// const MyPostsContainer = () => {

//     return (
//         <myContext.Consumer>
//             {
//                 store => {
//                     const onAddPost = () => {
//                         const action = addPostActionCreator();
//                         store.dispatch(action);
//                     };

//                     const onChangePostOfText = (text) => {
//                         const action = updatePostOfTextActionCreator(text)
//                         store.dispatch(action);
//                     };

//                     return (
//                         <MyPosts addPost={onAddPost} updatePostOfText={onChangePostOfText}
//                             profilePage={store.getState().profilePage} />
//                     );
//                 }
//             }
//         </myContext.Consumer>
//     );
// };

const mapStateToProps = (state) => {
    return {
        profilePage: state.profilePage
    };
};

const mapDispatchToState = (dispatch) => {
    return {
        addPost: () => {
            const action = addPostActionCreator();
            dispatch(action);
        },
        updatePostOfText: (text) => {
            const action = updatePostOfTextActionCreator(text)
            dispatch(action);
        }
    };
};

const MyPostsContainer = connect(mapStateToProps, mapDispatchToState)(MyPosts);

export default MyPostsContainer;