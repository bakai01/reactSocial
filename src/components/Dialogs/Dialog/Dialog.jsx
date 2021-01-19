import React from "react";
import {NavLink} from "react-router-dom";

import style from "./Dialog.module.css";

const Dialog = (props) => {
    return (
        <div className={style.item}>
            <img className={style.img} src="https://www.clipartmax.com/png/small/202-2021113_eindemi-youtube-comic-cartoon-avatar-by-maralikesarts-cartoon-avatars-for-youtube.png" alt="ava of dialogs" />
            <NavLink className={style.link} to={`/dialogs/${props.id}`} activeClassName={style.active}>{props.name}</NavLink>
        </div>
    ); 
};

export default Dialog;