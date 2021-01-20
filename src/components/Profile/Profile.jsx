import React from "react";
import style from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo";
import MyPosts from "./MyPosts";

const Profile = (props) => {

  return (
    <main className={style.main}>
      <ProfileInfo />

      <MyPosts profilePage={props.profilePage} dispatch={props.dispatch} />
    </main>
  );
}

export default Profile;