import React from "react";
import { NavLink } from "react-router-dom";
import FriendList from "./FriendList";

import style from "./Sidebar.module.css";

const Sidebar = (props) => {
    return (
        <nav className={style.menu}>
            <ul className={style.list}>
                <li className={style.item}>
                    <NavLink className={style.link} activeClassName={style.active} to="/profile">Profile</NavLink>
                </li>
                <li className={style.item}>
                    <NavLink className={style.link} activeClassName={style.active} to="/dialogs">Messages</NavLink>
                </li>
                <li className={style.item}>
                    <NavLink className={style.link} activeClassName={style.active} to="/news">News</NavLink>
                </li>
                <li className={style.item}>
                    <NavLink className={style.link} activeClassName={style.active} to="/music">Music</NavLink>
                </li>
                <li className={style.item}>
                    <NavLink className={style.link} activeClassName={style.active} to="/settings">Settings</NavLink>
                </li>
            </ul>

            <h4>Friends</h4>

            <div className={style.friends}>
                {
                    props.state.friendList.map((item) => {
                        return (
                            <FriendList key={item.id} name={item.name} />
                        );
                    })
                }
            </div>
        </nav>
    );
}

export default Sidebar;