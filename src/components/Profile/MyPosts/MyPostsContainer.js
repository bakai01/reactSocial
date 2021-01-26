import React from "react";
import {addPostActionCreator, updatePostOfTextActionCreator} from "../../../redux/profilePageReducer";
import MyPosts from "./MyPosts";

const MyPostsContainer = (props) => {

  const onAddPost = () => {
    const action = addPostActionCreator();
    props.store.dispatch(action);
  };

  const onChangePostOfText = (text) => {
    const action = updatePostOfTextActionCreator(text)
    props.store.dispatch(action);
  };
  
  return (
    <MyPosts addPost={onAddPost} updatePostOfText={onChangePostOfText}
      profilePage={props.store.getState().profilePage} />
  );
};

export default MyPostsContainer;