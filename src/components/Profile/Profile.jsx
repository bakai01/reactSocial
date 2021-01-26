import React from "react";
import style from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Profile = (props) => {

  return (
    <main className={style.main}>
      <ProfileInfo />

      <MyPostsContainer store={props.store} />
    </main>
  );
}

export default Profile;