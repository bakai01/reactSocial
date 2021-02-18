import React from "react";

import style from "./Post.module.css";

const Post = (props) => {
    return (
        <div className={style.post}>
            <img src="https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/girl_avatar_child_kid-512.png" 
            alt="avatar" />
            <div className={style.post__info}>
                <span className={style.text} >{props.text}</span>
                <div className={style.text__like}>
                    <i className="fas fa-heart"></i>
                    <span className={style.likes} >{props.likesCount} Likes</span>
                </div>
            </div>
        </div>
    );
}

export default Post;