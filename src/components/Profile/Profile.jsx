import React from 'react';
import style from './Profile.module.css';
import ProfileInfo from './ProfileInfo';
import MyPostsContainer from './MyPosts/MyPostsContainer';

const Profile = () => {

    return (
        <main className={style.main}>
            <ProfileInfo />

            <MyPostsContainer />
        </main>
    );
}

export default Profile;