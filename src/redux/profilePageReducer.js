const ADD_NEW_POST = 'ADD-NEW-POST';
const UPDATE_POST_OF_TEXT = 'UPDATE-POST-OF-TEXT';

const initialState = {
    listOfAllPosts: [{ id: 0, text: 'hello, world', likesCount: 23 }],
    newPostText: ''
};

const profilePageReducer = (profilePageState = initialState, action) => {
    const getLastPostId = () => {
        let postList = profilePageState.listOfAllPosts;
        let i = postList[postList.length - 1].id;
        return ++i;
    };

    switch (action.type) {
        case ADD_NEW_POST: {
            if (profilePageState.newPostText) {
                const newPost = {
                    id: getLastPostId(),
                    text: profilePageState.newPostText,
                    likesCount: 0
                };

                return {
                    ...profilePageState,
                    listOfAllPosts: [...profilePageState.listOfAllPosts, newPost],
                    newPostText: ''
                }
            }

            else {
                alert('Введите данные!!!');
                return profilePageState;
            }
        }

        case UPDATE_POST_OF_TEXT: {
            return {
                ...profilePageState,
                newPostText: action.newWordInTextarea
            };
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