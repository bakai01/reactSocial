import React from "react";

import style from "./Message.module.css";

const Message = (props) => {
    return (
        <div className={style.message}>
            <p>{props.text}</p>
        </div>
    );
};

export default Message;