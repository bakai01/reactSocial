import React from 'react';

import style from './Message.module.css';

const Message = ({ text }) => {
    return (
        <div className={style.message}>
            <p>{text}</p>
        </div>
    );
};

export default Message;