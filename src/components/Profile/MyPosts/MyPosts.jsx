import React from "react";
import Post from "./Post";
import style from "./MyPosts.module.css";

const MyPosts = (props) => {

  const textOfPost = React.createRef();

  const addPost = () => {
    props.addPost(textOfPost.current.value);
  };

  const updateTextOfPost = () => {
    props.updateTextOfPost(textOfPost.current.value);
  };

  return (
      <div className = {style.l}>
        <h3>My posts</h3>
        <div>
          <textarea ref = { textOfPost } onChange={updateTextOfPost} value={props.profilePage.newPostText} />
          <button onClick = { addPost }>Publish</button>
        </div>
        {
          props.profilePage.postsData.map( (item) => {
            return (
              <Post text={item.text} likesCount={item.likesCount} />
            );
          })
        }
      </div>
  );
};

export default MyPosts;