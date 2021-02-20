import React from "react";

import style from "./Users.module.css";

const Users = (props) => {
    return (
        props.usersPage.map(item => {
            return (
                <div className={style.wrapper} key={item.id}>
                    <div className={style.container}>
                        <div className={style.img__container}>
                            <img src={item.avatar} alt="avatar of user" />
                        </div>

                        <div className={style.content}>
                            <div className={style.head}>
                                <p>{item.fullName}</p>
                                <span>{item.status}</span>
                            </div>

                            <div className={style.data}>
                                <div className={style.inner__data}>
                                    <p>{item.location.country}</p>
                                    <span>{item.location.city}</span>
                                </div>
                            </div>

                        </div>

                        {
                            item.followed
                                ? <div className={style.floating__icon} onClick={() => { props.unfollow(item.id) }} >
                                    <i className="fa fa-plus" aria-hidden="true"></i>
                                </div>

                                : <div className={style.btn} onClick={() => { props.follow(item.id) }} >follow</div>
                        }
                    </div>
                </div>
            );
        })
    );
};

export default Users;