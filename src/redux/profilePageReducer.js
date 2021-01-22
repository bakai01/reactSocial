const ADD_NEW_POST = "ADD-NEW-POST";
const UPDATE_POST_OF_TEXT = "UPDATE-POST-OF-TEXT";

const profilePageReducer = (profilePageState, action) => {
    const getLastPostId = () => {
        let postList = profilePageState.listOfAllPosts;
        let i = postList[postList.length - 1].id;
        return ++i;
    };

    switch (action.type) {
        case ADD_NEW_POST:
            const newPost = {
                id: getLastPostId(),
                text: profilePageState.newPostText,
                likesCount: 0
            };
    
            profilePageState.listOfAllPosts.push(newPost);
            profilePageState.newPostText = "";
            console.log(profilePageState);
            return profilePageState;

        case UPDATE_POST_OF_TEXT:
            profilePageState.newPostText = action.newWordInTextarea;
            return profilePageState;

        default:
            return profilePageState;
    }
};

export const addPostActionCreator = () => ({ type: ADD_NEW_POST });

export const updatePostOfTextActionCreator = (textOfPost) => (
    { type: UPDATE_POST_OF_TEXT, newWordInTextarea: textOfPost }
);

export default profilePageReducer;