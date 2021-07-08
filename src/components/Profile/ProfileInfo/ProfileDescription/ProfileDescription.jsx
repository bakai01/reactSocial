import React from 'react'
import { Preloader } from '../../../common/Preloader'

import style from './ProfileDescription.module.css'

const ProfileDescription = ({ profile }) => {

    if (!profile) return <Preloader />

    return (
        <div className={style['profile-about']}>
            <div className={style.profile__img}>
                <img src={profile.photos.large} alt='profile ava' />
            </div>

            <div className={style.profile__description}>
                <div className={style.description__title}>
                    <h2>{profile.fullName}</h2>
                    <p>{profile.aboutMe}</p>
                </div>

                {
                    profile.lookingForAJob 
                        ? <span>{profile.lookingForAJobDescription}</span>
                        : null
                }
                <span>City: Minsk</span>
                <span>Status: Belarus</span>
                <span>Education: KSTU</span>
            </div>
        </div>
    )
}

export default ProfileDescription