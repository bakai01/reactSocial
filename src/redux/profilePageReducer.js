const ADD_NEW_POST = "ADD-NEW-POST";
const UPDATE_POST_OF_TEXT = "UPDATE-POST-OF-TEXT";

const initialState = {
    listOfAllPosts: [{ id: 0, text: "hello, world", likesCount: 23 }],
    newPostText: ""
};

const profilePageReducer = (profilePageState = initialState, action) => {
    const getLastPostId = () => {
        let postList = profilePageState.listOfAllPosts;
        let i = postList[postList.length - 1].id;
        return ++i;
    };

    switch (action.type) {
        case ADD_NEW_POST: {
            const newPost = {
                id: getLastPostId(),
                text: profilePageState.newPostText,
                likesCount: 0
            };

            let copyState = {};

            copyState = {...profilePageState};
            copyState.listOfAllPosts = [...profilePageState.listOfAllPosts];
            copyState.listOfAllPosts.push(newPost);
            copyState.newPostText = "";
            console.log(copyState);
            return copyState;
        }
            

        case UPDATE_POST_OF_TEXT: {
            let copyState = {};
            
            copyState = {...profilePageState};
            copyState.newPostText = action.newWordInTextarea;
            return copyState;
        }
            

        default:
            return profilePageState;
    }
};

export const addPostActionCreator = () => ({ type: ADD_NEW_POST });

export const updatePostOfTextActionCreator = (textOfPost) => (
    { type: UPDATE_POST_OF_TEXT, newWordInTextarea: textOfPost }
);

export default profilePageReducer;