import React from "react";

import style from "./FriendList.module.css"

const FriendList = (props) => {
    return (
        <div className={style.mas__friends}>
            <img className={style.img__ava} src="https://avatarfiles.alphacoders.com/126/126244.jpg" alt="ava of friend" />
            <span>{props.name}</span>
        </div>
    );
};

export default FriendList;