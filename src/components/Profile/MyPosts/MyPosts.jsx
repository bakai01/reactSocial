import React from "react";
import Post from "./Post";
import style from "./MyPosts.module.css";
import {addPostActionCreator, updatePostOfTextActionCreator} from "../../../redux/profilePageReducer";

const MyPosts = (props) => {

  const addPost = () => {
    props.dispatch(addPostActionCreator());
  };

  const updatePostOfText = (event) => {
    let textFromTextare = event.target.value;
    props.dispatch(updatePostOfTextActionCreator(textFromTextare));
  };
  
  return (
      <div className = {style.l}>
        <h3>My posts</h3>
        <div>
          <textarea className={style.textArea}
            onChange={updatePostOfText} value={props.profilePage.newPostText} />
          <div>
            <button className={style.btn} onClick = { addPost }>Publish</button>
          </div>
        </div>
        {
          props.profilePage.listOfAllPosts.map( (item) => {
            return (
              <Post text={item.text} likesCount={item.likesCount} />
            );
          })
        }
      </div>
  );
};

export default MyPosts;