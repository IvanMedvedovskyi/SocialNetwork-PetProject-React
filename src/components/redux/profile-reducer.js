const ON_INPUT_CHANGE = 'ON_INPUT_CHANGE';
const ADD_NEW_POST = 'ADD_NEW_POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_LOADING = 'SET_LOADING';

const initialState = {
    posts: [],
    newPostText: "",
    profilePageData: [],
    isLoading: false,
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
        case SET_USER_PROFILE:
            return {
                ...state,
                profilePageData: action.profilePageData,
            }
        case SET_LOADING:
            return {
                ...state,
                isLoading: action.loading,
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

export const setUserProfile = (profilePageData) => ({
    type: SET_USER_PROFILE,
    profilePageData,
})

export const setLoadingProfile = (loading) => ({
    type: SET_LOADING,
    loading,
})


export default profileReducer;