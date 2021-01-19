import React from "react";
import style from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo";
import MyPosts from "./MyPosts";

const Profile = (props) => {

  return (
    <main className={style.main}>
      <ProfileInfo />
      
      <MyPosts profilePage={props.profilePage} addPost={props.addPost} 
      updateTextOfPost={props.updateTextOfPost} />
    </main>
  );
}

export default Profile;