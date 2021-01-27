import React from "react";
import myContext from "../../../Context";
import { addPostActionCreator, updatePostOfTextActionCreator } from "../../../redux/profilePageReducer";
import MyPosts from "./MyPosts";

const MyPostsContainer = () => {

    return (
        <myContext.Consumer>
            {
                store => {
                    const onAddPost = () => {
                        const action = addPostActionCreator();
                        store.dispatch(action);
                    };

                    const onChangePostOfText = (text) => {
                        const action = updatePostOfTextActionCreator(text)
                        store.dispatch(action);
                    };

                    return (
                        <MyPosts addPost={onAddPost} updatePostOfText={onChangePostOfText}
                            profilePage={store.getState().profilePage} />
                    );
                }
            }
        </myContext.Consumer>
    );
};

export default MyPostsContainer;