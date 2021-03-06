import React from 'react'
import { NavLink } from 'react-router-dom'
import FriendList from './FriendList'

import style from './Sidebar.module.css'

const Sidebar = ({ state }) => {
    return (
        <nav className={style.menu}>
            <ul className={style.list}>
                <li className={style.item}>
                    <NavLink className={style.link} activeClassName={style.active} to='/profile'>
                        <i className='far fa-user'></i>
                        Profile
                    </NavLink>
                </li>
                <li className={style.item}>
                    <NavLink className={style.link} activeClassName={style.active} to='/dialogs'>
                        <i className='fas fa-comments'></i>
                        Messages
                    </NavLink>
                </li>
                <li className={style.item}>
                    <NavLink className={style.link} activeClassName={style.active} to='/users'>
                        <i className="fas fa-user"></i>
                        Users
                    </NavLink>
                </li>
                <li className={style.item}>
                    <NavLink className={style.link} activeClassName={style.active} to='/news'>
                        <i className='fas fa-newspaper'></i>
                        News
                    </NavLink>
                </li>
                <li className={style.item}>
                    <NavLink className={style.link} activeClassName={style.active} to='/music'>
                        <i className='fab fa-spotify'></i>
                        Music
                    </NavLink>
                </li>
                <li className={style.item}>
                    <NavLink className={style.link} activeClassName={style.active} to='/settings'>
                    <i className='fab fa-untappd'></i>
                        Settings
                    </NavLink>
                </li>
            </ul>

            <h4>Friends</h4>

            <div className={style.friends}>
                {
                    state.friendList.map((item) => {
                        return (
                            <FriendList key={item.id} name={item.name} />
                        )
                    })
                }
            </div>
        </nav>
    )
}

export default Sidebar