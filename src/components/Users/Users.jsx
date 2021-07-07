import React from 'react'
import { Link } from 'react-router-dom'

import style from './Users.module.css'

import avatarPhoto from '../../assets/images/defaultAvatar.jpg'
import UsersPagination from './Pagination/UsersPagination'
import Preloader from '../common/Preloader'

import { UsersAPI } from '../../api/api'

const Users = ({
    onChangePage,
    usersPage,
    unfollow,
    follow,
    totalUserCount,
    pageSize,
    isLoading,
    followingInProgress,
    toggleFoollowingProgress }) => {

    return (
        <div>
            <UsersPagination
                totalUserCount={totalUserCount}
                onChangePage={onChangePage}
                pageSize={pageSize}
            />

            {isLoading && <Preloader />}

            {usersPage.map(item => {
                return (
                    <div className={style.wrapper} key={item.id}>
                        <div className={style.container}>
                            <Link to={`/profile/${item.id}`}>
                                <div className={style.img__container}>
                                    <img
                                        src={item.photos.large !== null ? item.photos.large : avatarPhoto}
                                        alt='avatar of user'
                                    />
                                </div>
                            </Link>

                            <div className={style.content}>
                                <div className={style.head}>
                                    <p>{item.name}</p>
                                    <span>{item.status}</span>
                                </div>

                                <div className={style.data}>
                                    <div className={style.inner__data}>
                                        <p>{'item.location.country'}</p>
                                        <span>{'item.location.city'}</span>
                                    </div>
                                </div>
                            </div>

                            {item.followed
                                ? <button
                                    disabled={followingInProgress.some(id => id === item.id)}
                                    className={style.btn}
                                    onClick={() => {
                                        toggleFoollowingProgress(true, item.id)
                                        UsersAPI
                                            .unfollow(item.id)
                                            .then(data => {
                                                if (data.resultCode === 0) unfollow(item.id)
                                                toggleFoollowingProgress(false, item.id)
                                            })
                                    }} >
                                    unfollow
                                </button>

                                : <button
                                    disabled={followingInProgress.some(id => id === item.id)}
                                    className={style.floating__icon}
                                    onClick={() => {
                                        toggleFoollowingProgress(true, item.id)
                                        UsersAPI
                                            .follow(item.id)
                                            .then(data => {
                                                if (data.resultCode === 0) follow(item.id)
                                                toggleFoollowingProgress(false, item.id)
                                            })
                                    }} >
                                    <i className='fa fa-plus' aria-hidden='true'></i>
                                </button>
                            }
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export { Users }