import React from "react";

import Post from "./Post";

import style from "./MyPosts.module.css";

const MyPosts = (props) => {

    const addPost = () => {
        props.onAddPost();
    };

    const updatePostOfText = (event) => {
        let textFromTextare = event.target.value;
        props.updatePostOfText(textFromTextare);
    };

    return (
        <div className={style.posts}>
            <h3>My posts</h3>
            <div>
                <textarea className={style.textArea}
                    onChange={updatePostOfText} value={props.profilePage.newPostText} />
                <div className={style.btn__block}>
                    <button className={style.btn} onClick={addPost}>Publish</button>
                </div>
            </div>
            {
                props.profilePage.listOfAllPosts.map((item) => {
                    return (
                        <Post key={item.id} text={item.text} likesCount={item.likesCount} />
                    );
                })
            }
        </div>
    );
};

export default MyPosts;