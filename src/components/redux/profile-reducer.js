const ON_INPUT_CHANGE = 'ON_INPUT_CHANGE';
const ADD_NEW_POST = 'ADD_NEW_POST';

const initialState = {
    posts: [],
    newPostText: "",
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ON_INPUT_CHANGE:
            return {...state, newPostText: action.inputChange}

        case ADD_NEW_POST:
            const newPost = {
                id: 10,
                message: state.newPostText,
                likesCount: 0,
            };
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: "",
            }
        default:
            return state;
    }
}


export const onInputChange = (inputChange) => ({
    type: ON_INPUT_CHANGE,
    inputChange
})

export const addNewPost = () => ({
    type: ADD_NEW_POST
})


export default profileReducer;