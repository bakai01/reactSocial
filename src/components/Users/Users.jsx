import React from "react";
import * as axios from "axios";

import style from "./Users.module.css";

import avatarPhoto from "../../assets/images/defaultAvatar.jpg";

const Users = ({ usersPage, unfollow, follow, setUsers }) => {
    if (usersPage.users.length === 0) {
        axios
            .get("https://social-network.samuraijs.com/api/1.0/users")
            .then(({ data }) => {
                setUsers(data.items)
            })
            .catch(() => {
                console.log("Error")
            });
    }

    return (
        usersPage.users.map(item => {
            return (
                <div className={style.wrapper} key={item.id}>
                    <div className={style.container}>
                        <div className={style.img__container}>
                            <img src={item.photos.small != null ? item.photos.small : avatarPhoto} alt="avatar of user" />
                        </div>

                        <div className={style.content}>
                            <div className={style.head}>
                                <p>{item.name}</p>
                                <span>{item.status}</span>
                            </div>

                            <div className={style.data}>
                                <div className={style.inner__data}>
                                    <p>{"item.location.country"}</p>
                                    <span>{"item.location.city"}</span>
                                </div>
                            </div>

                        </div>
                        {
                            item.followed
                                ? <div className={style.floating__icon} onClick={() => { unfollow(item.id) }} >
                                    <i className="fa fa-plus" aria-hidden="true"></i>
                                </div>

                                : <div className={style.btn} onClick={() => { follow(item.id) }} >follow</div>
                        }
                    </div>
                </div>
            );
        })
    );
};

export default Users;