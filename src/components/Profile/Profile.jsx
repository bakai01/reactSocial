import React from 'react';

import style from './Profile.module.css';

import ProfileInfo from './ProfileInfo';
import MyPostsContainer from './MyPosts/MyPostsContainer';

const Profile = ({ profile }) => {
    return (
        <main className={style.main}>
            <ProfileInfo profile={profile} />

            <MyPostsContainer />
        </main>
    );
}

export default Profile;