import React from "react";

import style from "./Users.module.css";

import avatarPhoto from "../../assets/images/defaultAvatar.jpg";

const Users = ({ currentPage, onChangePage, usersPage, unfollow, follow, totalUserCount, pageSize }) => {

    const pagesCount = Math.ceil(totalUserCount / pageSize);
    const pages = [];
    for (let i = 1; i < pagesCount; i++) {
        pages.push(i);
    }

    return (
        <div>
            <div className={style.navigation__btn}>
                {
                    pages.map(page => <span
                        key={page}
                        className={currentPage === page ? style.selected : ""}
                        onClick={() => onChangePage(page)}
                    >{page}</span>)
                }
            </div>

            {
                usersPage.map(item => {
                    return (
                        <div className={style.wrapper} key={item.id}>
                            <div className={style.container}>
                                <div className={style.img__container}>
                                    <img src={item.photos.large != null ? item.photos.large : avatarPhoto} alt="avatar of user" />
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
            }
        </div>
    );
};

export default Users;