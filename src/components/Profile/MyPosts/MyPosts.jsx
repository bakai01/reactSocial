import React from "react";
import Post from "./Post";
import style from "./MyPosts.module.css";

const MyPosts = (props) => {

  const textOfPost = React.createRef();

  const addPost = () => {
    const action = { type: "ADD-NEW-POST" };
    props.dispatch(action);
  };

  const updatePostOfText = () => {
    const action = { type: "UPDATE-POST-OF-TEXT", newWordInTextarea: textOfPost.current.value  };
    props.dispatch(action);
  };
  
  return (
      <div className = {style.l}>
        <h3>My posts</h3>
        <div>
          <textarea ref = { textOfPost } onChange={updatePostOfText} value={props.profilePage.newPostText} />
          <button onClick = { addPost }>Publish</button>
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