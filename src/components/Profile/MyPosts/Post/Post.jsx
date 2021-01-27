import React from "react";

import style from "./Post.module.css";

const Post = (props) => {
    return (
        <div className={style.post}>
            <img src="https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/girl_avatar_child_kid-512.png" alt="avatar" />
            <span>{props.text} </span>
            <span>{props.likesCount}</span>
        </div>
    );
}

export default Post;