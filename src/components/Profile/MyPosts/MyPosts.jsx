import React from 'react';

import Post from './Post';

import style from './MyPosts.module.css';

const MyPosts = ({onAddPost, updatePostOfText, profilePage }) => {

    const addPost = () => {
        onAddPost();
    };

    const onUpdatePostOfText = (event) => {
        let textFromTextare = event.target.value;
        updatePostOfText(textFromTextare);
    };

    return (
        <div className={style.posts}>
            <h3>My posts</h3>
            <div>
                <textarea
                    className={style.textArea}
                    onChange={onUpdatePostOfText}
                    value={profilePage.newPostText}
                    placeholder='Your news...' 
                />
                <div className={style.btn__block}>
                    <button className={style.btn} onClick={addPost}>Publish</button>
                </div>
            </div>
            {
                profilePage.listOfAllPosts.map((item) => {
                    return (
                        <Post key={item.id} text={item.text} likesCount={item.likesCount} />
                    );
                })
            }
        </div>
    );
};

export default MyPosts;