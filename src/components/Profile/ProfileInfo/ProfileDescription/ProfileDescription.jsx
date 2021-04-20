import React from "react";

import style from "./ProfileDescription.module.css";

const ProfileDescription = () => {
    return (
        <div className={style['profile-about']}>
            <div className={style.profile__img}>
                <img src="https://66.media.tumblr.com/c5e0f53e9e4b1bc6da57e727f737753b/tumblr_piet9qDkNN1tjl5sho1_400.jpg" alt="profile ava" />
            </div>

            <div className={style.profile__description}>
                <h2>Kukold</h2>
            </div>
        </div>
    );
};

export default ProfileDescription;